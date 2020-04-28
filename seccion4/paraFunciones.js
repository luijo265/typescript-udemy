var session;
session = function (email, password) {
    if (email.length > 10 && password.length > 10) {
        return true;
    }
    else {
        return false;
    }
};
console.log(session('luijo2665@gmailc.om', '12345678910'));
