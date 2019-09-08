import { takeLatest, call, put, all } from 'redux-saga/effects';
import URLS from '../../config/urls';
import UsersActionTypes from './users.types';
import { 
    fetchUsersSuccess, fetchUsersFailure, 
} from './users.actions';

export function* fetchUsersAsync() {
    try {
        const response = yield call(fetch, URLS.getAllUsers());
        const users = yield response.json();
        yield put(fetchUsersSuccess(users));
    } catch (error) {
        yield put(fetchUsersFailure(error.message));
    }
}

export function* fetchUsersStart() {
    yield takeLatest(
        UsersActionTypes.FETCH_USERS_START,
        fetchUsersAsync
    );
}

export function* usersSagas() {
    yield all([call(fetchUsersStart)])
}