import React from 'react';
import { Container, Form, FormGroup, Label, Input, Button } from 'reactstrap';
import { Reimbursement } from '../core/model';
import { updateReimbursement } from '../core/client';
import { parseDate } from './reimbursement.view.component';

interface IEditReimState {

    amount: number
    description: string
    status: number
    submitted: boolean
}

interface IEditReimProps {

    reimbursement: Reimbursement
}

export class EditReimbursementComponent extends React.Component<IEditReimProps, IEditReimState> {

    constructor(props) {

        super(props);
        const { amount, description, status } = this.props.reimbursement;
        this.state = { amount: amount, description: description, status: status, submitted: false };
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

    editSubmit = async (event) => {

        event.preventDefault();

        const reim = this.props.reimbursement;

        const newReim = {
            reimbursementId: reim.reimbursementId,
            amount: this.state.amount,
            description: this.state.description,
            status: this.state.status
        };

        const response = await updateReimbursement(newReim);

        this.setState({ submitted: response ? true : false });
    }

    render() {

        const { author, amount, description, status, dateSubmitted } = this.props.reimbursement;

        const editForm = (
            <Form onSubmit={this.editSubmit}>
                <p>Author ID: {author}</p>
                <p>Date Submitted: {parseDate(dateSubmitted)}</p>
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
            </Form>);

        const success = (
            <h3>Reimbursement Updated!</h3>
        );

        return (

            <Container>
                {this.state.submitted ? success : editForm}
            </Container>
        );
    }
}
