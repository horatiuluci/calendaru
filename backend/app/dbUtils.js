require('dotenv').config()
const MongoClient = require('mongodb').MongoClient;
const ObjectID = require('mongodb').ObjectID;
const dbUri = require('./config').dbUri;
const bcrypt = require('bcrypt');
const bcryptSaltRounds = require('./config').bcryptSaltRounds;

let connectedDb;
let defaultUsers = JSON.parse(process.env["DEFAULT_USERS_ARRAY"]);
console.log(defaultUsers);


// Seed default users for testing purposes
// If users already found, don't add them
const seedDefaultUsers = (connectedDb) => {
    for (const defaultUser of defaultUsers) {
        // const parsedDefaultUser = JSON.parse(defaultUser)

        connectedDb.collection('users')
            .findOne({username: defaultUser.username}, (err, user) => {
                if (!user)
                    bcrypt.hash(defaultUser.password, bcryptSaltRounds, function(err, hash) {
                        connectedDb.collection('users').insertOne(
                            {username: defaultUser.username, password: hash, userToEvent: new ObjectID().toString()}
                        );
                    });
            });
    }
};

module.exports = {
    connectToServer: (callback) => {
        MongoClient.connect('mongodb://db:27017/').then(client => {
            connectedDb = client.db('nodesecurityproject');
            seedDefaultUsers(connectedDb);
            return callback();
        });
    },
    getConnectedDb: () => {
      return connectedDb;
    }
};
