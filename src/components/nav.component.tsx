import React from 'react';
import { connect } from 'react-redux';
import { Nav, Navbar, NavbarBrand, NavItem, NavLink } from 'reactstrap';
import { Link } from 'react-router-dom';
import { IState } from '../reducers';
import { User } from '../core/model';

interface INavProps {

    currentUser: User
}

export class NavComponent extends React.Component<INavProps, any> {

    render() {

        const user = this.props.currentUser;

        const userLink = user ? user.userId : '';
        const userPath = '/users/' + userLink;
        const userReims = '/reimbursements/' + userLink;

        const noneItems = (
            <>
                <NavItem>
                    <NavLink tag={Link} to="/main">Main</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/login">Login</NavLink>
                </NavItem>
            </>
        );

        const userItems = (
            <>
                <NavItem>
                    <NavLink tag={Link} to={userPath}>{user ? user.username : ''}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/new">New</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={userReims}>My Reimbursements</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/login">Logout</NavLink>
                </NavItem>
            </>
        );

        const finManItems = (
            <>
                <NavItem>
                    <NavLink tag={Link} to={'/users/' + userLink}>{user ? user.username : ''}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/new">New</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={'/reimbursements/' + userLink}>My Reimbursements</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/select">View</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/login">Logout</NavLink>
                </NavItem>
            </>
        );

        const adminItems = (
            <>
                <NavItem>
                    <NavLink tag={Link} to={'/users/' + userLink}>{user ? user.username : ''}</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/new">New</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to={'/reimbursements/' + userLink}>My Reimbursements</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/select">View</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/users">Users</NavLink>
                </NavItem>
                <NavItem>
                    <NavLink tag={Link} to="/login">Logout</NavLink>
                </NavItem>
            </>
        );

        let items;

        const id = user ? user.role.roleId : 0;

        switch (id) {

            case (1):
                items = adminItems;
                break;

            case (2):
                items = userItems;
                break;

            case (3):
                items = finManItems;
                break;

            default:
                items = noneItems;
                break;
        }

        return (
            <div>
                <Navbar color="light" light expand="md">
                    <NavbarBrand tag={Link} to="/main">ERS</NavbarBrand>
                    <Nav className="ml-auto" navbar>
                        {
                            items
                        }
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
