import UsersActionTypes from './users.types';

const {
    FETCH_USERS_START, FETCH_USERS_SUCCESS, FETCH_USERS_FAILURE,
} = UsersActionTypes;

export const fetchUsersStart = () => ({
    type: FETCH_USERS_START,
});

export const fetchUsersSuccess = users => ({
    type: FETCH_USERS_SUCCESS,
    payload: users
});

export const fetchUsersFailure = errorMessage => ({
    type: FETCH_USERS_FAILURE,
    payload: errorMessage
});