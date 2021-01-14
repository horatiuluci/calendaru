const express = require('express');
const bodyParser = require('body-parser');
const cors = require('cors')
const routes = require('./routes');
const dbUtils = require('./dbUtils');

const app = express();
const port = 8000;
// parse application/x-www-form-urlencoded
// parse application/json
app.use(bodyParser.urlencoded({ extended: false }));
app.use(bodyParser.json());

// enable cors, untill SPA/serving frontend from same process is implemented
var corsOptions = { origin: 'http://localhost:4200' };
app.use(cors(corsOptions));

dbUtils.connectToServer((err) => {
    if (err) {
        console.log(err);
    } else {
        // Routes/endpoints go here
        routes(app, dbUtils.getConnectedDb());
        // Start listening on default port
        app.listen(port, () => {  
            console.log('Hello world from ' + port);
        });
    }
});

