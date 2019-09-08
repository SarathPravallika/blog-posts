import { shallowCompare } from '../../shared/utils';

export const buildUsers = ({byId}, users) => {
    const newById = {};
    const newAllIds = [];

    // Updating with the new users
    users && users.forEach(user => {
        const oldUser = byId[user.id];
        // In our simplistic case shallow compare will work, but in live scenarios deep compare is needed
        if (oldUser && shallowCompare(oldUser, user)) {
            newById[user.id] = oldUser;
        } else {
            newById[user.id] = user;
        }
        newAllIds.push(user.id);
    });

    return {
        byId: newById,
        allIds: newAllIds
    };
}

export const buildUsersDetails = (users) => {
    return users && users.allIds.map(id => users.byId[id]);
}