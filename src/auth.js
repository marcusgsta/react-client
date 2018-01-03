import decode from 'jwt-decode';
const crypto = require('crypto');

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

    /*
    * get nick from token
    * @return nick
    */
    getNick() {
        if (this.isLoggedIn()) {
            let token = this.getIdToken();
            let decoded = decode(token);

            if (decoded.nick !== "undefined") {
                return decoded.nick;
            }
        }
        return false;
    },

    getUser() {
        if (this.isLoggedIn()) {
            let token = this.getIdToken();
            let decodedUser = decode(token);

            if (decodedUser !== "undefined") {
                return decodedUser;
            }
        }
        return false;
    },

    getGravatar() {
        let user = this.getUser();

        if (user.email) {
            var emailStr = user.email;
            var hashStr = crypto.createHash('md5').update(emailStr).digest('hex');

            return "https://www.gravatar.com/avatar/" + hashStr;
        }
        return "false";
    },

    authenticateAdmin() {
        if (this.isLoggedIn()) {
            let token = this.getIdToken();
            let decoded = decode(token);

            if (decoded.role === 'admin') {
                return true;
            }
        }
        return false;
    },

    isLoggedIn() {
        const idToken = this.getIdToken();

        return idToken;
    },

    getIdToken() {
        if (typeof(localStorage) !== "undefined") {
            return localStorage.getItem(this.ID_TOKEN_KEY);
        }
        return false;
    },

    deleteToken() {
        if (typeof(localStorage) !== "undefined") {
            return localStorage.clear();
        }
        return;
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
