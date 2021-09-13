const User = require('../models/userModel')

module.exports = {
  displayServer: (req, res) => {
    console.log("I'm Display Server")
    res.send("Server Running!");
  },

  getAllUsers: (req, res) => {
    User.User.findAll()
      .then(allUsers => {
        console.log(allUsers)
        res.json(allUsers);
      })

  },

  addUser: (req, res) => {
    User.User.create({ username: req.body.username })
    res.status(201).end(req.body.username)
  }

};