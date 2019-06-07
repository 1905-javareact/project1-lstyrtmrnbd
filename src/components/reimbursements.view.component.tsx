import React from 'react';
import { ReimbursementView } from './reimbursement.view.component';
import { Reimbursement } from '../core/model';

interface IReimsViewProps {

    reimbursements: Reimbursement[]
}

interface IReimsViewState {

    reims: JSX.Element[]
}

export class ReimbursementsView extends React.Component<IReimsViewProps, IReimsViewState> {

    constructor(props) {
        super(props);

        const reims = this.props.reimbursements.map((reim) => {
            return (<ReimbursementView key={reim.reimbursementId} reimbursement={reim} />);
        });
        this.state = { reims: reims };
    }

    render() {

        return (
            <div>
                {this.state.reims}
            </div>
        );
    }
}
