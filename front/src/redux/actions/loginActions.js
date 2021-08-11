export const SET_LOGIN_MODAL = 'login/SET_LOGIN_MODAL';
export const SET_USER = 'login/SET_USER';

export const setLogin = login => ({
    type: SET_LOGIN_MODAL,
    payload: login,
});

export const setUser = user => ({
    type: SET_USER,
    payload: user,
});