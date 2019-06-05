import React from 'react';

import { UserView } from './user.view.component';
import { ReimbursementView } from './reimbursement.view.component';
import { User, Reimbursement } from '../core/model';
import { login, getUserById, getReimbursementByStatus } from '../core/client';

interface ITestState {

    loginResult: User,
    getByIdResult: User,
    getReimByStatusResult: Reimbursement
}

export class ClientTestComponent extends React.Component<ITestState, any> {

    constructor(props) {

        super(props);
        this.state = {};
    }

    async componentDidMount() {

        const loginUser = await login('overseer0', 'password');

        const idUser = await getUserById(2);

        const statusReim = await getReimbursementByStatus(1);

        this.setState({
            loginResult: loginUser,
            getByIdResult: idUser,
            getReimByStatusResult: statusReim
        });
    }

    render() {

        return (
            <div>
                <p>Testing login as financial manager:</p>
                <UserView user={this.state.loginResult} />
                <p>Testing get user by ID:</p>
                <UserView user={this.state.getByIdResult} />
                <p>Testing get reimbursement by Status ID:</p>
                <ReimbursementView reimbursement={this.state.getReimByStatusResult} />
            </div>
        );
    }
}
