require("dotenv").config();
const Sequelize = require("sequelize");
const {CONNECTION_STRING} = process.env

const connection = new Sequelize(CONNECTION_STRING, {
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

  connection
  .sync({
    logging: console.log,
  })
  .then(()=>{
  
    console.log("DB connected !");
  })

  .catch((err) => {
    console.error("DB NOT CONNECTED =O ", err);
  });

const db ={
  Sequelize:Sequelize,
  connection:connection,
  user: require('./userModel')(connection, Sequelize)
}


module.exports = db