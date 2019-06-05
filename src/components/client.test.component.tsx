import React from 'react';

import { UserView } from './user.view.component';
import { User } from '../core/model';
import { login } from '../core/client';

interface ITestState {

    loginResult: User
}

export class ClientTestComponent extends React.Component<ITestState, any> {

    constructor(props) {

        super(props);
        this.state = {};
    }

    async componentDidMount() {

        const user = await login('overseer0', 'password');

        this.setState({ loginResult: user });
    }

    render() {

        return (
            <div>
                <p>Testing login as financial manager:</p>
                <UserView user={this.state.loginResult} />
            </div>
        );
    }
}
