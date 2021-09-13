const express = require("express");
const app = express();
const ctrl = require('./controllers/controllers')
const User = require('./models/userModel')
// const sequelize = require('./db/db')

app.use(express.json());
//app.use(express.urlencoded());
// Sequelize is available via npm
// npm install --save sequelize

// You'll also have to manually install the driver for your database of choice: POSTGRES
// $ npm install --save pg pg-hstore

//import sequelize to use
const { Sequelize, DataTypes } = require("sequelize");
// import dotenv / to use .env file
require("dotenv").config();

// const { CONNECTION_STRING, SERVER_PORT } = process.env;
const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
 //for using my heroku uri I needed this setup
 // to connect with other database hosts it could be different
 //or if hosting youself it yourself it will be a differnt setup
 dialect: "postgres",
 dialectOptions: {
  ssl: {
   require: true,
   rejectUnauthorized: false,
  },
 },
});

sequelize
 .sync({
  logging: console.log,
  //   force: true
 })
 .then(() => {
  console.log(User)
  console.log("DB connected !");
 })

 .catch((err) => {
  console.error("DB NOT CONNECTED =O ", err);
 });


// // const { CONNECTION_STRING, SERVER_PORT } = process.env;
// const sequelize = new Sequelize(process.env.CONNECTION_STRING, {
//  //for using my heroku uri I needed this setup
//  // to connect with other database hosts it could be different
//  //or if hosting youself it yourself it will be a differnt setup
//  dialect: "postgres",
//  dialectOptions: {
//   ssl: {
//    require: true,
//    rejectUnauthorized: false,
//   },
//  },
// });

//testing if connection works

// sequelize.authenticate() <- replaced by sync
console.log(sequelize)



//We will create our tables in the Models folder and each table will be a file


//ENDPOINTS

app.get("/", ctrl.displayServer);

app.get("/allUsers", ctrl.getAllUsers)

app.post('/post', ctrl.addUser)

//SERVER LISTENING ON A SPECIFIC PORT`
app.listen(process.env.SERVER_PORT, console.log(`PORT ${process.env.SERVER_PORT} is running~`));