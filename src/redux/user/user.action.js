
// we are going to use it in app.js to set user informations


export const setCurrentUser = user => ({
    type: 'SET_CURRENT_USER',
    payload: user
});