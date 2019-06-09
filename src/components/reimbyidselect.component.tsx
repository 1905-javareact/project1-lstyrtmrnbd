import React from 'react';
import { Container, Row, Col, Button } from 'reactstrap';
import { ReimByIdComponent } from './reimbyid.component';

interface ISelectState {

    id: number
}

export class SelectReimbursementIdComponent extends React.Component<any, ISelectState> {

    constructor(props) {

        super(props);
        this.state = { id: 0 };
    }

    setId(id: number) {

        this.setState({ id: id });
    }

    render() {

        return (
            <Container>
                <Row>
                    <Col>
                        <Button onClick={(e) => { this.setId(1) }}>Pending</Button>
                    </Col>
                    <Col>
                        <Button onClick={(e) => { this.setId(2) }}>Approved</Button>
                    </Col>
                    <Col>
                        <Button onClick={(e) => { this.setId(3) }}>Denied</Button>
                    </Col>
                </Row>
                <Row>
                    <Col md={{ size: 6, offset: 3 }}>
                        {this.state.id !== 0 ? (<ReimByIdComponent id={this.state.id} />) : (<></>)}
                    </Col>
                </Row>
            </Container>
        );
    }
}
