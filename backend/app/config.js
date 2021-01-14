// Save config. variables here
// Don't share those! Don't make them public on GitHub, etc.
const dotenv = require('dotenv');
dotenv.config();

const dbUri = process.env.DB_URI;
const secretSigningToken = process.env.JWT_SECRET_KEY;
const bcryptSaltRounds = 10;

exports.dbUri = dbUri;
exports.secretKey = secretSigningToken;
exports.bcryptSaltRounds = bcryptSaltRounds;
