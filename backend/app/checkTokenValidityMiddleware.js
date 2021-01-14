var jwt = require('jsonwebtoken');
const secretKey = require('./config').secretKey;

function checkTokenValidityMiddleware(req, res, next) {
  // Get the token from headers, and remove Bearer if found
  let token = req.headers['x-access-token'] || req.headers['authorization'];
  token = token.replace(/^Bearer\s+/, "");
  
  if (!token)
    return res.status(403).send({ auth: false, message: 'No token provided.' });
    
  jwt.verify(token, secretKey, (err, decoded) => {
    if (err)
      return res.status(500).send({ auth: false, message: 'Failed to authenticate token.' });

    // At this point, we are authenticated
    // Send decoded info. for further endpoints usage
    req.decodedUsername = decoded.username;
    next();
  });
}

module.exports = checkTokenValidityMiddleware;
