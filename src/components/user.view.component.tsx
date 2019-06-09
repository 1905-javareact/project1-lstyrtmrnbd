import React from 'react';
import { User, placeholderUser } from '../core/model';

interface IUserViewProps {

    user: User
}

export class UserView extends React.PureComponent<IUserViewProps> {

    render() {

        const user = this.props.user || placeholderUser;

        return (

            <table>
                <tbody>
                    <tr>
                        <td>User ID:</td>
                        <td>{user.userId}</td>
                    </tr>
                    <tr>
                        <td>Username:</td>
                        <td>{user.username}</td>
                    </tr>
                    <tr>
                        <td>Name:</td>
                        <td>{user.lastName}, {user.firstName}</td>
                    </tr>
                    <tr>
                        <td>Email:</td>
                        <td>{user.email}</td>
                    </tr>
                    <tr>
                        <td>Role:</td>
                        <td>{user.role.role}</td>
                    </tr>
                </tbody>
            </table>

        );
    }
}
