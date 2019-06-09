import React from 'react';
import './include';
import './App.css';

import { BrowserRouter, Switch, Route } from 'react-router-dom';

import { NavComponent } from './components/nav.component';
import { ClientTestComponent } from './components/client.test.component';
import { LoginComponent } from './components/login.component';
import { SelectReimbursementIdComponent } from './components/reimbyidselect.component';

const App: React.FC = () => {
    return (
        <BrowserRouter>
            <NavComponent />
            <Switch>
                <Route path='/clienttests' component={ClientTestComponent} />
                <Route path='/login' component={LoginComponent} />
                <Route path='/select' component={SelectReimbursementIdComponent} />
            </Switch>
        </BrowserRouter>
    );
}

export default App;
