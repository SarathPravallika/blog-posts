import UsersActionTypes from './users.types';
import { buildUsers } from './users.utils';

const INITIAL_STATE = {
    byId: {},
    allIds: []
};

const { FETCH_USERS_SUCCESS } = UsersActionTypes;

const UsersReducer = (state = INITIAL_STATE, { type, payload }) => {
    switch(type) {
        case FETCH_USERS_SUCCESS:
            return Object.assign(
                {}, 
                state, 
                buildUsers(state, payload)
            );
        default:
            return state;
    }
};

export default UsersReducer;