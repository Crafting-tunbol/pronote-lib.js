const request = require('request');

class Client {
    constructor(username, password) {
        this.username = username;
        this.password = password;
    }

    async loginEnt(url) {
        request.post(`https://www.${url}/auth/login`, {
            form: {
                email: this.username,
                password: this.password
            }
        }, (err, res, body) => {
            if (err) {
                console.log(err);
                //return;
            }
            console.log(body);
            //return body;
        });
    };
}

module.exports = Client;