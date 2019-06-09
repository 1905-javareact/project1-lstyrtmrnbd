import React from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { IState } from '../reducers';
import { User } from '../core/model';

interface INavProps {

    currentUser: User
}

export class NavComponent extends React.PureComponent<INavProps> {

    render() {

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand href="/">ERS</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        <NavItem>
                            <NavLink href="#">{this.props.currentUser ? this.props.currentUser.username : ''}</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/clienttests/">Client Test Output</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/select">Reimbursements</NavLink>
                        </NavItem>
                        <NavItem>
                            <NavLink href="/login">Login</NavLink>
                        </NavItem>
                    </Nav>
                </Navbar>
            </div>
        );
    }
}

const mapStateToProps = (state: IState) => {

    return {
        currentUser: state.login.currentUser
    }
}

export default connect(mapStateToProps, null)(NavComponent);
