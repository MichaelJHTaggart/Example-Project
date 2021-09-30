require("dotenv").config();
const Sequelize = require("sequelize");
const { CONNECTION_STRING } = process.env
const sequelize = new Sequelize(CONNECTION_STRING, {
  //for using my heroku uri I needed this setup
  // to connect with other database hosts it could be different
  //or if hosting youself it yourself it will be a differnt setup
  dialect: "postgres",
  define: {
    freezeTableName: true
  },
  dialectOptions: {
    ssl: {
      require: true,
      rejectUnauthorized: false,
    },
  },
});

//* I have commented out the below code so to improve speed of application. The table has been created in the database. This prevents from needing to run this function for every time we use sequelize.
// sequelize
//   .sync({
//     logging: console.log,
//   })
//   .then(() => {
//     console.log("DB connected !");
//   })
//   .catch((err) => {
//     console.error("DB NOT CONNECTED =O ", err);
//   });

const db = {
  Sequelize: Sequelize,
  sequelize: sequelize,
  user: require('./userModel')(sequelize, Sequelize)
}

module.exports = db