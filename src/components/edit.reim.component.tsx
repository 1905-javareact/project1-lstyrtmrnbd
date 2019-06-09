import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Reimbursement } from '../core/model';

interface IEditReimState {

    amount: number
    description: string
    status: number
}

interface IEditReimProps {

    reimbursement: Reimbursement
}

export class EditReimbursementComponent extends React.Component<IEditReimProps, IEditReimState> {

    constructor(props) {

        super(props);
        this.state = { amount: 0, description: '', status: 1 };
    }

    updateAmount = (event) => {
        this.setState({ amount: event.target.value });
    }

    updateDescription = (event) => {
        this.setState({ description: event.target.value });
    }

    updateStatus = (event) => {
        this.setState({ status: event.target.value });
    }

    editSubmit = (event) => {

        event.preventDefault();
    }

    render() {

        const { amount, description, status } = this.props.reimbursement;

        return (

            <Container>
                <Form onSubmit={this.editSubmit}>
                    <FormGroup>
                        <Label for="inputAmount">Amount</Label>
                        <Input type="number" name="amount" id="inputAmount" placeholder={amount.toString()} onChange={this.updateAmount} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inputDescription">Description</Label>
                        <Input type="text" name="description" id="inputDescription" placeholder={description} onChange={this.updateDescription} />
                    </FormGroup>
                    <FormGroup>
                        <Label for="inputStatus">Status</Label>
                        <Input type="number" name="status" id="inputStatus" placeholder={status.toString()} onChange={this.updateStatus} />
                    </FormGroup>
                    <Button type="submit">Submit</Button>
                </Form>
            </Container>
        );
    }
}
