import React from 'react';
import { connect } from 'react-redux';
import { User } from '../core/model';
import { IState } from '../reducers';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { submitReimbursement } from '../core/client';

interface ISubmitReimState {

    amount: number
    description: string
    type: number
    submitted: boolean
}

interface ISubmitReimProps {

    currentUser: User
}

export class SubmitReimbursementComponent extends React.Component<ISubmitReimProps, ISubmitReimState> {

    constructor(props) {

        super(props);
        this.state = {
            amount: 0,
            description: '',
            type: 1,
            submitted: false
        };
    }

    updateAmount = (event) => {
        this.setState({ amount: event.target.value });
    }

    updateDescription = (event) => {
        this.setState({ description: event.target.value });
    }

    submit = async (event) => {

        event.preventDefault();

        const newReim = {
            author: this.props.currentUser.userId,
            amount: this.state.amount,
            description: this.state.description,
            type: this.state.type
        };

        const response = await submitReimbursement(newReim);

        this.setState({ submitted: response ? true : false });
    }

    render() {

        return (
            <Container>
                <Form onSubmit={this.submit}>
                    <FormGroup>
                        <Label for="inputAmount">Amount</Label>
                        <Input type="number" name="amount" id="inputAmount" onChange={this.updateAmount} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inputDescription">Description</Label>
                        <Input type="text" name="description" id="inputDescription" onChange={this.updateDescription} />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}

const mapStateToProps = (state: IState) => {

    return {
        currentUser: state.login.currentUser
    }
}

export default connect(mapStateToProps, null)(SubmitReimbursementComponent);
