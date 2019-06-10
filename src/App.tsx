import React from 'react';
import './include';
import './App.css';

import { Provider } from 'react-redux';
import { store } from './Store';

import LoginComponent from './components/login.component';
import NavComponent from './components/nav.component';
import MainPageComponent from './components/mainpage.component';
import SubmitReimbursementComponent from './components/submit.reim.component';

import { BrowserRouter, Switch, Route } from 'react-router-dom';
import { ClientTestComponent } from './components/client.test.component';
import { SelectReimbursementIdComponent } from './components/reimbyidselect.component';
import { ReimbursementsByUserId } from './components/reimbyuser.component';
import { UserByIdComponent } from './components/userbyid.component';
import { UserSelectComponent } from './components/userselectid.component';

const App: React.FC = () => {
    return (
        <Provider store={store}>
            <BrowserRouter>
                <NavComponent />
                <Switch>
                    <Route path='/main' component={MainPageComponent} />
                    <Route path='/clienttests' component={ClientTestComponent} />
                    <Route path='/login' component={LoginComponent} />
                    <Route path='/select' component={SelectReimbursementIdComponent} />
                    <Route path='/new' component={SubmitReimbursementComponent} />
                    <Route path='/reimbursements/:id' render={(props) => <ReimbursementsByUserId {...props} id={parseInt(props.match.params.id)} />} />
                    <Route path='/users/:id' render={(props) => <UserByIdComponent {...props} id={parseInt(props.match.params.id)} />} />
                    <Route path='/users' component={UserSelectComponent} />
                </Switch>
            </BrowserRouter>
        </Provider >
    );
}

export default App;
