import React from 'react';
import { ReimbursementView } from './reimbursement.view.component';
import { Reimbursement } from '../core/model';

interface IReimsViewProps {

    reimbursements: Reimbursement[]
}

export class ReimbursementsView extends React.PureComponent<IReimsViewProps> {

    render() {

        const reims = this.props.reimbursements;

        return (
            <div>
                {reims.map((reim) => {
                    return (<ReimbursementView key={reim.reimbursementId}
                        reimbursement={reim} />);
                })}
            </div>
        );
    }
}
