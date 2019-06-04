import React from 'react';

import { UserView } from './user.view.component';

import { login } from '../core/client';

export class ClientTestComponent extends React.PureComponent {

    render() {

        return (
            <div>
                <p>Testing login as financial manager:</p>
                <UserView user={async () => { return await login('overseer0', 'password') }} />
            </div>
        );
    }
}
