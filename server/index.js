// DEPENDENCIES
require('dotenv').config();
const express = require('express');
const massive = require('massive');
const session = require('express-session');
const authenticateUser = require('./middlewares/authenticateUser.js');
const path = require('path')

// IMPORTED VARIABLES
const { SERVER_PORT, CONNECTION_STRING } = process.env;


// ACTIVATIONS
const app = express();

//MIDDLEWARE
app.use(express.json());

//Auth Controllers
app.post('/auth/login', authCtrl.login);
app.get('/auth/user', authCtrl.getUserSession);

app.get('*', (req, res) => { //Its essentially a catchall. 
 res.sendFile(path.join(__dirname, '../build/index.html'))
})

massive({
 connectionString: CONNECTION_STRING,
 ssl: {
  rejectUnauthorized: false,
 },
}).then((dbInstance) => {
 app.set('db', dbInstance)
 console.log('db connected')
 app.listen(SERVER_PORT, () => {
  console.log(`A sour lemonServer is jamming on port ${SERVER_PORT}`)
 })
})