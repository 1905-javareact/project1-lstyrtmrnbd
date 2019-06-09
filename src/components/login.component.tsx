import React from 'react';
import { RouteComponentProps } from 'react-router';
import { connect } from 'react-redux';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { IState, ILoginState } from '../reducers';
import { login } from '../core/client';

interface ILoginProps extends RouteComponentProps {

    loginAction: (username: string, password: string, history: any) => void
}

interface ILoginCompState {

    username: string,
    password: string
}

export class LoginComponent extends React.Component<ILoginProps, ILoginCompState> {

    updateUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    updatePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    loginSubmit = (event) => {
        event.preventDefault()
        this.props.loginAction(this.state.username, this.state.password, this.props.history);
    }

    render() {

        return (
            <Container>
                <Form onSubmit={this.loginSubmit}>
                    <FormGroup>
                        <Label for="inputUsername">Username</Label>
                        <Input type="text" name="username" id="inputUsername" onChange={this.updateUsername} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="examplePassword">Password</Label>
                        <Input type="password" name="password" id="inputPassword" onChange={this.updatePassword} />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}

const loginTypes = {

    LOGIN_FAILURE: 'LOGIN_FAILURE',
    LOGIN_SUCCESS: 'LOGIN_SUCCESS'
}

const loginAction = (username: string, password: string, history: any) => async (dispatch) => {

    const response = await login(username, password);

    if (!response) {

        dispatch({ type: loginTypes.LOGIN_FAILURE });
    } else {

        dispatch({ payload: { user: response }, type: loginTypes.LOGIN_SUCCESS });
    }
}

const initialState: ILoginState = {

    currentUser: undefined,
    errorMessage: undefined
}

export const loginReducer = (state = initialState, action) => {

    switch (action.type) {

        case loginTypes.LOGIN_FAILURE:
            return {
                ...state,
                errorMessage: 'Failed to login'
            };

        case loginTypes.LOGIN_SUCCESS:
            return {
                ...state,
                currentUser: action.payload.user,
                errorMessage: undefined
            };

        default:
            break;
    }

    return state;
}

const mapStateToProps = (state: IState) => {

    return {
        currentUser: state.login.currentUser,
        errorMessage: state.login.errorMessage
    }
}

const mapDispatchToProps = {

    loginAction: loginAction
}

export default connect(mapStateToProps, mapDispatchToProps)(LoginComponent);

