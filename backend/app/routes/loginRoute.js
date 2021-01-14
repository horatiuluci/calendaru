const jwt = require('jsonwebtoken');
const secretKey = require('../config').secretKey;
const bcrypt = require('bcrypt');
var sanitize = require('mongo-sanitize');

module.exports = function(app, dbClient) {

    app.post('/login', (req, res) => {
        // Read username and password from request body
        const username = sanitize(req.body.username);
        const password = sanitize(req.body.password);

        // This line should require more validation
        if (!username || !password) {
            res.status(400).send('Username or password not given');
        } else {
            // Filter/find first user that meets the criteria from the DB
            // Compare hashes using bcrypt.compare() method
            // Generate an access token, default signing with HMAC SHA256
            dbClient.collection('users')
                .findOne({'username': username}, (err, user) => {
                    if (err || !user) {
                        res.status(404).send('User not found! Username or password incorrect');
                    } else {
                        bcrypt.compare(password, user.password, function(err, result) {
                            if (err || !result) res.send('Username or password don\'t match');
                            if (result) {
                                const accessToken = jwt.sign({ username: user.username }, secretKey);
                                res.json({accessToken});
                            }
                        });
                    }
                });
        }
    });

};
