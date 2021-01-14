const loginRoute = require('./loginRoute');
const authorizedRoutes = require('./authorizedRoutes');

module.exports = function(app, dbClient) { 
  loginRoute(app, dbClient);
  authorizedRoutes(app, dbClient);
};
