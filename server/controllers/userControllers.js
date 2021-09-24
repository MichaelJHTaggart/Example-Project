const db = require("../Sequelize")
const user = db.user

module.exports = {
  displayServer: (req, res) => {
    console.log("I'm Display Server")
    res.send("Server Running!");
  },

  getAllUsers: (req, res) => {
    user.findAll()
      .then(allUsers => {
        console.log(allUsers)
        res.json(allUsers);
      })
  },

  addUser: (req, res) => {
    user.create({ username: req.body.username })
    res.status(201).end(req.body.username)
  }
};