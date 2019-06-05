import React from 'react';

import { UserView } from './user.view.component';
import { User } from '../core/model';
import { login, getUserById } from '../core/client';

interface ITestState {

    loginResult: User,
    getByIdResult: User
}

export class ClientTestComponent extends React.Component<ITestState, any> {

    constructor(props) {

        super(props);
        this.state = {};
    }

    async componentDidMount() {

        const loginUser = await login('overseer0', 'password');

        const idUser = await getUserById(2);

        this.setState({
            loginResult: loginUser,
            getByIdResult: idUser
        });
    }

    render() {

        return (
            <div>
                <p>Testing login as financial manager:</p>
                <UserView user={this.state.loginResult} />
                <p>Testing get user by ID:</p>
                <UserView user={this.state.getByIdResult} />
            </div>
        );
    }
}
