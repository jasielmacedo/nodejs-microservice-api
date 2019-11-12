const express = require('express')
const bodyParser = require('body-parser')
const helmet = require('helmet')
const cors = require('cors')
const makeRoutes = require('./services')

var app = express();
var host = process.env.HOST || "127.0.0.1";
var port = process.env.PORT || 8044;

var corsOptions = 
{
    origin: ["http://localhost:4200"],
    allowedHeaders : ["Origin", "X-Requested-With", "Content-Type", "Accept", "Authorization", "x-web-access-token"],
    credentials : true,
    optionsSuccessStatus : 200
}

app.use(cors(corsOptions));

/*****Body Parser ******/
app.use(bodyParser.json());
app.use(bodyParser.urlencoded({extended: true}));

/*** Security ***/
app.use(helmet());

/**** Header Rewrite ****/
app.disable('x-powered-by');

makeRoutes(express.Router())

app.listen(port,host);
console.log('Running in http://'+host+':' + port);

export default app