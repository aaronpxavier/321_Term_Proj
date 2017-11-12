/**
 * API Application
 * Created by arun_mavumkal  on 10/24/2017.
 */

// Imports ------------------------------------------------------------------//

import express from '../node_modules/express'; // web server
import parser from '../node_modules/body-parser'; // http request parser
import morgan from '../node_modules/morgan'; // logger
import mongoose from '../node_modules/mongoose'; //mongoose middleware
import config from './cfg'; // application configuration
import endpoints from './routes/endpoints'; // version 1 routes

// Variables ----------------------------------------------------------------//

const app = express(); // our express application

//mongoose setup
mongoose.Promise = global.Promise;
mongoose.connect(config.db_host, {
    useMongoClient: true
});
// Express Application Setup ------------------------------------------------//

// logging
app.use(morgan(config.mode));

// default status code
app.use((req,res,next)=>{
    res.status(200);
res.header('Access-Control-Allow-Origin','*');
res.header('Access-Control-Allow-Methods','GET,PUT,POST,DELETE,OPTIONS');
res.header('Access-Control-Allow-Headers','Origin, X-Requested-With, Content-Type, Accept, Authorization');
next(); // forward to next middleware call
}); // end app.use

// for all options requests (pre-flight requests) the origin and method headers will be sent
app.options('/*',(req,res,next)=>{
    res.end(); // send response
}); // end app.options

// parse incoming requests
app.use(parser.json());
app.use(parser.urlencoded({extended: true}));

// load api version routes (i.e. app.use('[version root route]',imported-version-routes))
app.use('/api',endpoints);

// default api endpoint
app.all('/',(req,res)=>{
    res.json({
    msg: 'root url works'
});
}); // end app.all(/)

// Exports ------------------------------------------------------------------//

export default app;