import React from 'react';
import { Container } from 'reactstrap';
import { User } from '../core/model';
import { getUserById } from '../core/client';
import { UserView } from './user.view.component';

interface IUserByIdState {

    user: User
}

interface IUserByIdProps {

    id: number
}

export class UserByIdComponent extends React.Component<IUserByIdProps, IUserByIdState> {

    constructor(props) {

        super(props);
        this.state = { user: null };
    }

    async componentDidMount() {

        const usr = await getUserById(this.props.id);

        this.setState({ user: usr });
    }

    render() {

        return (
            <Container>
                <UserView user={this.state.user} />
            </Container>
        );
    }
}
