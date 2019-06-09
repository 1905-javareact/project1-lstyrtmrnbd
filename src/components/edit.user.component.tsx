import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button, Dropdown, DropdownMenu, DropdownItem, DropdownToggle, Row, Col } from 'reactstrap';
import { User } from '../core/model';

interface IEditUserState {

    username: string
    password: string
    firstName: string
    lastName: string
    email: string
    role: number
    dropdownOpen: boolean
    selectedRole: string
}

interface IEditUserProps {

    user: User
}

export class EditUserComponent extends React.Component<IEditUserProps, IEditUserState> {

    constructor(props) {

        super(props);

        const { username, password, firstName, lastName, email, role } = this.props.user;
        this.state = {
            dropdownOpen: false,
            username: username,
            password: password,
            firstName: firstName,
            lastName: lastName,
            email: email,
            role: role.roleId,
            selectedRole: 'Current Role'
        };
    }

    toggle = () => {
        this.setState(prevState => ({
            dropdownOpen: !prevState.dropdownOpen
        }));
    }

    selectRole = (role: string) => {
        this.setState(prevState => ({
            selectedRole: role
        }));
    }

    updateUsername = (event) => {
        this.setState({ username: event.target.value });
    }

    updatePassword = (event) => {
        this.setState({ password: event.target.value });
    }

    updateFirstName = (event) => {
        this.setState({ firstName: event.target.value });
    }

    updateLastName = (event) => {
        this.setState({ lastName: event.target.value });
    }

    updateEmail = (event) => {
        this.setState({ email: event.target.value });
    }

    editSubmit = (event) => {
        event.preventDefault();
    }

    render() {

        const { username, password, firstName, lastName, email } = this.props.user;

        return (
            <Container>
                <Form onSubmit={this.editSubmit}>
                    <FormGroup>
                        <Label for="inputUsername">Username</Label>
                        <Input type="text" name="username" id="inputUsername" placeholder={username} onChange={this.updateUsername} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inputPassword">Password</Label>
                        <Input type="password" name="password" id="inputPassword" placeholder={password} onChange={this.updatePassword} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inputFirstName">First Name</Label>
                        <Input type="text" name="firstName" id="inputFirstName" placeholder={firstName} onChange={this.updateFirstName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inputLastName">Last Name</Label>
                        <Input type="text" name="lastName" id="inputLastName" placeholder={lastName} onChange={this.updateLastName} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inputEmail">Email</Label>
                        <Input type="email" name="email" id="inputEmail" placeholder={email} onChange={this.updateEmail} />
                    </FormGroup>
                    <Row>
                        <Col>
                            <Dropdown isOpen={this.state.dropdownOpen} toggle={this.toggle}>
                                <DropdownToggle caret>
                                    {this.state.selectedRole}
                                </DropdownToggle>
                                <DropdownMenu>
                                    <DropdownItem onClick={(e) => this.selectRole('User')}>User</DropdownItem>
                                    <DropdownItem onClick={(e) => this.selectRole('Finance Manager')}>Finance Manager</DropdownItem>
                                    <DropdownItem onClick={(e) => this.selectRole('Admin')}>Admin</DropdownItem>
                                </DropdownMenu>
                            </Dropdown>
                        </Col>
                        <Col>
                            <Button type="submit">Submit</Button>
                        </Col>
                    </Row>
                </Form>
            </Container>
        );
    }
}
