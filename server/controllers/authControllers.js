const db = require("../Sequelize");
const user = db.user;

module.exports = {
  register: (req, res) => {
    console.log(req.body.username);
    user.create({ username: req.body.username, email: req.body.email });

    res.status(201).res.send(req.body.username);
  },

  login: (req, res) => {
    const { username, email } = req.body;

    user
      .findOne({
        where: { username: username },
      })
      .then((user) => {
        if (!user) {
          res.send("no user found!");
        } else {
          res.status(200).res.send(user);
        }
      });
  },

  logout: (req, res) => {},
};
