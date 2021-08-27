// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const path = require('path')

// IMPORTED CONTROLLER FILES
const authCtrl = require('./controllers/authController.js')

// IMPORTED VARIABLES
const { SERVER_PORT, SESSION_SECRET, CONNECTION_STRING } = process.env;


// ACTIVATIONS
const app = express();

//MIDDLEWARE
app.use(express.json());
app.use(
 session({
  resave: false,
  saveUninitialized: true,
  secret: SESSION_SECRET,
  cookie: { maxAge: 1000 * 60 * 60 * 24 },
 })
)
//app.use(express.static(`${__dirname}/../build`)) //serving our build folder

//Auth Controllers
app.post('/auth/login', authCtrl.login);
app.get('/auth/user', authCtrl.getUserSession);

// app.get('*', (req, res) => { //Its essentially a catchall. 
//  res.sendFile(path.join(__dirname, '../build/index.html'))
// })

massive({
 connectionString: CONNECTION_STRING,
 ssl: {
  rejectUnauthorized: false,
 },
}).then((dbInstance) => {
 app.set('db', dbInstance)
 console.log('db connected')
 app.listen(SERVER_PORT, () => {
  console.log(`The Server is Firing ${SERVER_PORT}`)
 })
})