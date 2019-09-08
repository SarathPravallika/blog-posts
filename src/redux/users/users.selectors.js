import { createSelector } from 'reselect';
import { buildUsersDetails } from './users.utils';

export const selectUsers = state => state.users;

export const selectUserDetailsForView = createSelector(
    [selectUsers],
    users => buildUsersDetails(users)
);