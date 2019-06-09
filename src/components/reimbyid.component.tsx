import React from 'react';
import { Reimbursement } from '../core/model';
import { getReimbursementByStatus } from '../core/client';
import { ReimbursementsView } from './reimbursements.view.component';

interface IReimByIdState {

    reimbursements: Reimbursement[]
}

interface IReimByIdProps {

    id: number
}

export class ReimByIdComponent extends React.Component<IReimByIdProps, IReimByIdState> {

    constructor(props) {

        super(props);
        this.state = { reimbursements: [] };
    }

    async componentDidMount() {

        const reims = await getReimbursementByStatus(this.props.id);

        this.setState({ reimbursements: reims });
    }

    render() {

        return (
            <ReimbursementsView reimbursements={this.state.reimbursements} />
        );
    }
}
