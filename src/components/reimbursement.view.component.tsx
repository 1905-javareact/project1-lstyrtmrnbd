import React from 'react';
import { Table, Button } from 'reactstrap';
import { Reimbursement } from '../core/model';
import { EditReimbursementComponent } from './edit.reim.component';

export function parseDate(value: number) {

    return new Date(value).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: '2-digit' });
}

interface IReimbursementViewProps {

    reimbursement: Reimbursement
}

interface IReimbursementViewState {

    editing: boolean
}

export class ReimbursementView extends React.Component<IReimbursementViewProps, IReimbursementViewState> {

    constructor(props) {

        super(props);
        this.state = { editing: false };
    }

    edit = () => {

        this.setState({ editing: !this.state.editing });
    }

    render() {

        const reim = this.props.reimbursement;

        const table = (
            <Table>
                <tbody>
                    <tr>
                        <td>ID:</td>
                        <td>{reim.reimbursementId}</td>
                    </tr>
                    <tr>
                        <td>Author ID:</td>
                        <td>{reim.author}</td>
                    </tr>
                    <tr>
                        <td>Amount:</td>
                        <td>{reim.amount}</td>
                    </tr>
                    <tr>
                        <td>Description:</td>
                        <td>{reim.description}</td>
                    </tr>
                    <tr>
                        <td>Resolver ID:</td>
                        <td>{reim.resolver}</td>
                    </tr>
                    <tr>
                        <td>Status:</td>
                        <td>{reim.status}</td>
                    </tr>
                    <tr>
                        <td>Date Submitted:</td>
                        <td>{parseDate(reim.dateSubmitted)}</td>
                    </tr>
                    <tr>
                        <td>Date Resolved:</td>
                        <td>{parseDate(reim.dateResolved)}</td>
                    </tr>
                </tbody>
            </Table>
        );

        const edit = (
            <EditReimbursementComponent reimbursement={reim} />
        );

        return (
            <>
                <Button onClick={(e) => this.edit()}>Edit</Button>
                {this.state.editing ? edit : table}
            </>
        );
    }
}
