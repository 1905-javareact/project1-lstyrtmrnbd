import React from 'react';
import { Form, FormGroup, Label, Input } from 'reactstrap';
import { UserByIdComponent } from './userbyid.component';

interface IUserSelectState {

    userId: number
}

export class UserSelectComponent extends React.Component<any, IUserSelectState> {

    constructor(props) {

        super(props);
        this.state = { userId: 0 };
    }

    updateID = (event) => {
        this.setState({ userId: event.target.value });
    }

    render() {

        const usr = this.state.userId;

        const selector = (
            <Form>
                <FormGroup>
                    <Label for="userID">Enter User ID:</Label>
                    <Input type="number" name="user" id="userID" onChange={this.updateID} />
                </FormGroup>
            </Form >
        );

        return (
            <>
                {selector}
                {usr > 0 ? <UserByIdComponent id={usr} /> : <></>}
            </>
        );
    }
}
