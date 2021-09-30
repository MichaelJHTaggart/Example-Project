const express = require("express");
const app = express();
const userCtrl = require('./controllers/userControllers')
const authCtrl = require('./controllers/authControllers')
//yoyoyoyoyoyoyoy :)

app.use(express.json());


// app.use(
//   session({
//     resave: false,
//     saveUninitialized: true,
//     secret: SESSION_SECRET,
//     cookie: { maxAge: 1000 * 60 * 60 * 24 },
//   })
// )

// app.post('/login', authCtrl.login)
// app.delete('/logout', authCtrl.logout)
// app.post('/register',authCtrl.register)

app.get("/", userCtrl.displayServer);
app.get("/allUsers", userCtrl.getAllUsers)
app.post('/addUser', userCtrl.addUser)

app.listen(process.env.SERVER_PORT, console.log(`PORT ${process.env.SERVER_PORT} is running~`));