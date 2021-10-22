const db = require("../Sequelize");
const user = db.user;

module.exports = {
  register: async (req, res) => {
     console.log(req.body.username);
    await user.create({ username: req.body.username, password: req.body.password });

    res.status(201).send(req.body.username);
  },

  login: (req, res) => {
    const { username, password } = req.body;

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
