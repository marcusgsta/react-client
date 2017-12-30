import decode from 'jwt-decode';

const Auth = {

    ID_TOKEN_KEY: 'token',

    authenticate(cb) {
        if (!this.isLoggedIn()) {
            setTimeout(cb, 100);
            return false;
        }
        setTimeout(cb, 100);
        return true;
    },

    authenticateAdmin() {
        if (this.isLoggedIn()) {
            let token = this.getIdToken();
            let decoded = decode(token);

            if (decoded.role === 'admin') {
                console.log("ho");
                return true;
            }
        } else {
            return false;
        }
    },

    isLoggedIn() {
        const idToken = this.getIdToken();

        return idToken;
    },

    getIdToken() {
        if (localStorage !== undefined) {
            return localStorage.getItem(this.ID_TOKEN_KEY);
        }
    },

    deleteToken() {
        if (localStorage !== undefined) {
            return localStorage.clear();
        }
    },
    //
    // getUser() {
    //     // const token = this.getIdToken();
    //
    //     // fetch('/api/find/?id=' + token)
    //     fetch('/api/find')
    //         .then(results => {
    //             if (results.ok) {
    //                 return results.json();
    //             }
    //             throw new Error("Network response was not ok.");
    //         }).then(data => {
    //             console.log(data);
    //             // this.setState({users: data});
    //             console.log("Logged in user", data);
    //             return data;
    //         }).catch(error => {
    //             console.log("There was a problem with your fetch operation: ", error.message);
    //         });
    // }

};
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
export default Auth;
