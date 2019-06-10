import React from 'react';
import { connect } from 'react-redux';
import { Container } from 'reactstrap';
import { IState } from '../reducers';
import { User } from '../core/model';

interface IMainProps {

    currentUser: User
}

export class MainPageComponent extends React.PureComponent<IMainProps> {

    render() {

        const user = this.props.currentUser;

        const loggedIn = (
            <h3>You are logged in as {user ? user.username : ''}</h3>
        );

        const notLoggedIn = (
            <h3>Please log in to continue.</h3>
        );

        return (

            <Container>
                <h3>Welcome to the Employee Reimbursement System</h3>
                {user ? loggedIn : notLoggedIn}
            </Container>
        );
    }
}

const mapStateToProps = (state: IState) => {

    return {
        currentUser: state.login.currentUser
    }
}

export default connect(mapStateToProps, null)(MainPageComponent);

