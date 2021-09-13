const { Sequelize, DataTypes } = require("sequelize");

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

module.exports = {

 User: User = sequelize.define('User', {
  username: {
   allowNull: false, //cannot be empty
   type: DataTypes.STRING,
   unique: true,
   validate: {
    is: /^\w{3,}$/
    // this validate  & REGEX is recommended by the Sequelize team, it will make sure
    //usernames to have length of at least 3, and only use letters, numbers and underscores.
   }

  },
  user_pic: {
   type: DataTypes.STRING
  }
 })
}