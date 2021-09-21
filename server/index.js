const express = require("express");
const app = express();
const ctrl = require('./controllers/controllers')


app.use(express.json());



// Sequelize is available via npm
// npm install --save sequelize

// You'll also have to manually install the driver for your database of choice: POSTGRES
// $ npm install --save pg pg-hstore

//import sequelize to use
const { Sequelize, DataTypes } = require("sequelize");
// import dotenv / to use .env file



//testing if connection works

// sequelize.authenticate() <- replaced by sync
const db = require('./Sequelize');

db.sequelize
  .sync({
    logging: console.log,
  })
  .then(()=>{
  
    console.log("DB connected !");
  })

  .catch((err) => {
    console.error("DB NOT CONNECTED =O ", err);
  });


app.get("/", ctrl.displayServer);

app.get("/allUsers" , ctrl.getAllUsers)

app.post('/addUser', ctrl.addUser)
  
  app.listen(process.env.SERVER_PORT, console.log(`PORT ${process.env.SERVER_PORT} is running~`));