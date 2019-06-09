import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';

interface ISubmitReimState {

    amount: number
    description: string
}

export class SubmitReimbursementComponent extends React.Component<any, ISubmitReimState> {

    constructor(props) {

        super(props);
        this.state = { amount: 0, description: '' };
    }

    updateAmount = (event) => {
        this.setState({ amount: event.target.value });
    }

    updateDescription = (event) => {
        this.setState({ description: event.target.value });
    }

    submit = (event) => {

        event.preventDefault();
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
