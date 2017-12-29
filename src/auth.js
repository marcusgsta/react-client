// import React, {Component, PropTypes} from 'react';
// import decode from 'jwt-decode';
const ID_TOKEN_KEY = 'token';
// const NEXT_PATH_KEY = 'next_path';
// const LOGIN_ROUTE = '/login';
// let localStorage;

export function requireAuth() {
    console.log(!isLoggedIn());
    if (!isLoggedIn()) {
        // setNextPath(nextState.location.pathname);
        // replace({pathname: LOGIN_ROUTE});
        // this.props.history.replace(LOGIN_ROUTE);
        return false;
    }
    return true;
}

function isLoggedIn() {
    const idToken = getIdToken();

    // return idToken && !isTokenExpired(idToken);
    return idToken;
}

function getIdToken() {
    if (localStorage !== undefined) {
        return localStorage.getItem(ID_TOKEN_KEY);
    }
}

export function deleteToken() {
    if (localStorage !== undefined) {
        return localStorage.clear();
    }
}

// function setNextPath(nextPath) {
//     localStorage.setItem(NEXT_PATH_KEY, nextPath);
// }

// function isTokenExpired(token) {
//     const expirationDate = getTokenExpirationDate(token);
//
//     return expirationDate < new Date();
// }

// function getTokenExpirationDate(encodedToken) {
//     const token = decode(encodedToken);
//
//     if (!token.exp) { return null; }
//
//     const date = new Date(0);
//
//     date.setUTCSeconds(token.exp);
//
//     return date;
// }
