import React from 'react';
import { ReimbursementView } from './reimbursement.view.component';
import { Reimbursement } from '../core/model';

interface IReimsViewProps {

    reimbursements: Reimbursement[]
}

export class ReimbursementsView extends React.PureComponent<IReimsViewProps> {

    render() {

        const reims = this.props.reimbursements;
        const valid = reims && reims.length > 0;

        const views = reims.map((reim) => {
            return (<ReimbursementView key={reim.reimbursementId}
                reimbursement={reim} />);
        });

        return (
            <div>
                {valid ? views : (<></>)}
            </div>
        );
    }
}
