const express = require("express");
const app = express();
const ctrl = require('./controllers/controllers')


app.use(express.json());


// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     cookie: { maxAge: 1000 * 60 * 60 * 24 },
//   })
// )

app.get("/", ctrl.displayServer);

app.get("/allUsers" , ctrl.getAllUsers)

app.post('/addUser', ctrl.addUser)
  
  app.listen(process.env.SERVER_PORT, console.log(`PORT ${process.env.SERVER_PORT} is running~`));