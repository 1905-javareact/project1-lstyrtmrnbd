import React from 'react';
import { Container } from 'reactstrap';
import { Reimbursement } from '../core/model';
import { ReimbursementsView } from './reimbursements.view.component';
import { getReimbursementByUser } from '../core/client';

interface IReimByUserState {

    reimbursements: Reimbursement[]
}

interface IReimByIdProps {

    id: number
}

export class ReimbursementsByUserId extends React.Component<IReimByIdProps, IReimByUserState> {

    constructor(props) {

        super(props);
        this.state = { reimbursements: [] };
    }

    async componentDidMount() {

        const reims = await getReimbursementByUser(this.props.id);

        this.setState({ reimbursements: reims });
    }

    render() {

        return (
            <Container>
                <ReimbursementsView reimbursements={this.state.reimbursements} />
            </Container>
        );
    }
}
