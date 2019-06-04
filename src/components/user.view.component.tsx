import React from 'react';
import { User } from '../core/model';

interface IUserViewProps {

    user: User
}

export class UserView extends React.PureComponent<IUserViewProps> {

    render() {

        return (
            <p>
                {JSON.stringify(this.props.user)}
            </p>
        );
    }
}
