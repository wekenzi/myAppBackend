const express = require('express');
const bodyParser = require('body-parser');

// Routes
const login = require('./routers/login');
const validate = require('./routers/validate');
const register = require('./routers/register');
const dashboard = require('./routers/dashboard');
const generalLists = require('./routers/generalLists');
const clients = require('./routers/clients');
const projects = require('./routers/projects');
const freelancers = require('./routers/freelancers');
const payments = require('./routers/payments');
const nationalities = require('./routers/Nationalities');
const currencies = require('./routers/currencies');
const videocall = require('./routers/videocall');

// DB Connection string
// const mDB = 'mongodb://localhost/wekeapp';
const mDB = 'mongodb://<wekeapp>:<wekeapp1234>@ds143532.mlab.com:43532/wekeapp';


const checkAuth = require('./middleware/checkAuth');
const mongoose = require('mongoose');
mongoose.set('useFindAndModify', false);
const cors = require('cors');
const app = express();

mongoose.connect(process.env.MONGODB_URI || mDB ,{useNewUrlParser:true});
mongoose.Promise = global.Promise;
mongoose.connection.once('open',()=>{
  console.log('Connected to MongoDb');
}).on('error',(error)=>{
  console.log('Error Happend', error);
});


// allowedHeaders:['Content-Type', 'Authorization','Origin','Accept','X-Requested-With']
app.use(cors({origin: '*'}));
app.use(bodyParser.json());
app.use('/api/register',register);
app.use('/api/login',login);
app.use('/api/validate',validate);
app.use('/api/clients',checkAuth,clients);
app.use('/api/dashboard',checkAuth,dashboard);
app.use('/api/generalLists',checkAuth,generalLists);
app.use('/api/projects',checkAuth,projects);
app.use('/api/freelancers',checkAuth,freelancers);
app.use('/api/payments',checkAuth,payments);
app.use('/api/nationalities',checkAuth,nationalities);
app.use('/api/currencies',checkAuth,currencies);

// Video Call
app.use('/api/videocall',videocall);



//Error Handling
app.use((err,req,res,next)=>{
  res.status(500).send(err)
});




app.listen(process.env.PORT || 3000,()=> {
  console.log('Server Running');
});
