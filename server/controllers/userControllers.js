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
    console.log(req.body.name)
    user.create({ username: req.body.username,
                  email:req.body.email })

    res.status(201).res.end(req.body.username)
  },

  login: (req,res) =>{
   const {username,email} = req.body

   user.findOne({ 
     where:{username:username} 
     }).then((user)=>{
        if(!user){
          res.send("no user found!")
        }
        else{
          res.status(200).res.send(user)
        }
     }

   )

  }

};