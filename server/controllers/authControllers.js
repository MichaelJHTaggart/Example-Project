module.exports = {
 displayServer: (req, res) => {
  console.log("I'm Display Server")
  res.send("Server Running!");
 },

 getAllUsers: (req, res) => {
  User.findAll()
   .then(allUsers => {
    console.log(allUsers)
    res.json(allUsers);
   })

 }

};