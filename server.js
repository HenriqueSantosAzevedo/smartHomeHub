const hbs = require('hbs');
const path = require('path');
const colors = require('colors');
const express = require('express');
const dotenv = require('dotenv');
const morgan = require('morgan');

const app = express();
const server = require('http').createServer(app);

app.use(express.static('./assets'));

//loads the routes predefined inside of array;
const router = require('./configuration/server-start/loadRoutes.js');

//initiate configurations
dotenv.config();
app.use(morgan('dev'));
colors.enable();

//Use predefined function => initiate routes
router(
    app, 
    [
        {path: path.join(__dirname, 'router')}
    ]
)

app.get('*', (req, res) => {
    res.sendStatus(404);
})

app.set('view engine', 'hbs');
hbs.registerPartials(path.join(__dirname, "views", "partials"));


//Startup Server
server.listen(process.env.PORT, (err) => {
    console.log(`Opened HTTP-Server on port ${process.env.PORT}`.cyan);
});

