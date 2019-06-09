import React from 'react';
import { Container } from 'reactstrap';
import { UserView } from './user.view.component';
import { ReimbursementsView } from './reimbursements.view.component';
import { User, Reimbursement, placeholderUser, placeholderReim } from '../core/model';
import { login, getUserById, getReimbursementByStatus, getReimbursementByUser } from '../core/client';

interface ITestState {

    loginResult: User,
    getById: User,
    getReimByStatus: Reimbursement[],
    getReimByUser: Reimbursement[]
}

export class ClientTestComponent extends React.Component<ITestState, any> {

    constructor(props) {

        super(props);
        this.state = {};
    }

    async componentDidMount() {

        const loginUser = await login('admin0', 'password');

        const idUser = await getUserById(2);

        const statusReim = await getReimbursementByStatus(1);

        const userReim = await getReimbursementByUser(2);

        this.setState({
            loginResult: loginUser,
            getById: idUser,
            getReimByStatus: statusReim,
            getReimByUser: userReim
        });
    }

    render() {

        return (
            <Container>
                <p>Testing login as:</p>
                <UserView user={this.state.loginResult || placeholderUser} />
                <p>Testing get user by ID:</p>
                <UserView user={this.state.getById || placeholderUser} />
                <p>Testing get reimbursement by Status ID:</p>
                <ReimbursementsView reimbursements={this.state.getReimByStatus || [placeholderReim]} />
                <p>Testing get reimbursement by User ID:</p>
                <ReimbursementsView reimbursements={this.state.getReimByUser || [placeholderReim]} />
            </Container>
        );
    }
}
