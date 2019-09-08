import UsersActionTypes from '../users/users.types';
import usersReducer from './users.reducer';

const { FETCH_USERS_SUCCESS } = UsersActionTypes;
const initialState = {
    byId: {},
    allIds: []
};

describe('usersReducer', () => {
  it('should return initial state', () => {
    expect(usersReducer(undefined, {})).toEqual(initialState);
  });

  it('should set users with byIds and allIds after success call', () => {
    const expectedOutput = {
        byId: { 1: {id: 1, name: 'User-1'}, 2: {id: 2, title: 'User-2'}},
        allIds: [1, 2]
    };
    expect(usersReducer(
        initialState, {type: FETCH_USERS_SUCCESS, payload: [{id: 1, name: 'User-1'}, {id: 2, title: 'User-2'}]}
    )).toEqual(expectedOutput);
  });

  it('should set users with initial value if no data', () => {
    expect(usersReducer(
        initialState, {type: FETCH_USERS_SUCCESS, payload: undefined}
    )).toEqual(initialState);
  });
});
