//import { combineReducers } from 'redux';

import { User } from '../core/model';

//import { testReducer } from '../components/client.test.component';

export interface ILoginState {

    currentUser: User,
    errorMessage: string
}

export interface IState {

    login: ILoginState
}

