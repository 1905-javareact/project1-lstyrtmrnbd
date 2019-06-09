import React from 'react';
import { Table, Button } from 'reactstrap';
import { User, placeholderUser } from '../core/model';
import { EditUserComponent } from './edit.user.component';

interface IUserViewProps {

    user: User
}

interface IUserViewState {

    editing: boolean
}

export class UserView extends React.Component<IUserViewProps, IUserViewState> {

    constructor(props) {

        super(props);
        this.state = { editing: false };
    }

    edit = () => {

        this.setState({ editing: !this.state.editing });
    }

    render() {

        const user = this.props.user || placeholderUser;

        const table = (
            <Table>
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
            </Table>
        );

        const edit = (
            <EditUserComponent user={user} />
        );

        return (
            <>
                <Button onClick={(e) => this.edit()}>Edit</Button>
                {this.state.editing ? edit : table}
            </>
        );
    }
}
