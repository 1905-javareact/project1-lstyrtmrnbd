import { combineReducers } from 'redux';
import { User } from '../core/model';
import { loginReducer } from '../components/login.component';

export interface ILoginState {

    currentUser: User,
    errorMessage: string
}

export interface IState {

    login: ILoginState
}

export const state = combineReducers<IState>({
    login: loginReducer
});
