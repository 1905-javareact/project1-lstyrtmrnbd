import React from 'react';
import { Reimbursement } from '../core/model';

function parseDate(value: number) {

    return new Date(value).toLocaleString('en-US', { weekday: 'short', day: 'numeric', month: 'short', year: '2-digit' });
}

interface IReimbursementViewProps {

    reimbursement: Reimbursement
}

export class ReimbursementView extends React.PureComponent<IReimbursementViewProps> {

    render() {

        const reim = this.props.reimbursement;

        return (
            <table>
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
            </table>
        );
    }
}
