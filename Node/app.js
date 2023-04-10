const express = require('express');
const app = express();
app.use(function (req, res, next) {

console.log("first middle ware");
next();

});
app.use(function (req, res, next) {

console.log("second middle ware");
next();

});
app.post('/login-user', function (req, res) {

res.send("page render finished");

});
// const session = require('express-session');
// app.use(session({
//   name: 'SESSION_ID',      // cookie name stored in the web browser
//   secret: 'my_secret',     // helps to protect session
//   cookie: {
//       maxAge: 30 * 86400000, // 30 * (24 * 60 * 60 * 1000) = 30 * 86400000 => session is stored 30 days
//   }
// }))
// const mongoose = require("mongoose");
// app.use(express.json());
// const cors = require('cors');
// app.use(cors());
// const bcrypt = require("bcryptjs");
// const jwt = require("jsonwebtoken");
// const JWT_SECRET =
// "hvdvay6ert72839289()aiyg8t87qt72393293883uhefiuh78ttq3ifi78272jbkj?[]]pou89ywe";

// const mongoUrl = "mongodb+srv://Meet_105:Meet_105@cluster0.wqe2pff.mongodb.net/?retryWrites=true&w=majority";

// mongoose.connect(mongoUrl, {
//     useNewUrlParser: true,
// }).then(()=>{console.log("COnnected to Db");})
// .catch((e)=>console.log("Error"));

// require("./userDetails")
// const User = mongoose.model("UserInfo");
// app.post("/register", async (req, res) => {
//     const { fname, lname, email, password } = req.body;
  
//     const encryptedPassword = await bcrypt.hash(password, 10);
//     try {
//       const oldUser = await User.findOne({ email });
  
//       if (oldUser) {
//         return res.json({ error: "User Exists" });
//       }
//       await User.create({
//         fname,
//         lname,
//         email,
//         password: encryptedPassword,
//       });
//       res.send({ status: "ok" });
//     } catch (error) {
//       res.send({ status: "error" });
//     }
//   });
//   app.post("/login-user", async (req, res) => {
//     const { email, password } = req.body;
  
//     const user = await User.findOne({ email });
//     if (!user) {
//       return res.json({ error: "User Not found" });
//     }
//     if (await bcrypt.compare(password, user.password)) {
//       const token = jwt.sign({ email: user.email }, JWT_SECRET);
  
//       if (res.status(201)) {
//         req.session.id = User.name;
//         console.log(req.session.id);
//         return res.json({ status: "ok", data: token });
//       } else {
//         return res.json({ error: "error" });
//       }
//     }
//     res.json({ status: "error", error: "InvAlid Password" });
//   });
//   app.post('/logout', async (request, response) => {
//     if (request.session.userId) {
//         delete request.session.id;
//         response.json({result: 'SUCCESS'});
//     } else {
//         response.json({result: 'ERROR', message: 'User is not logged in.'});
//     }
// });

//   app.post("/userData", async (req, res) => {
//     const { token } = req.body;
//     try {
//       const user = jwt.verify(token, JWT_SECRET);
//       console.log(user);
  
//       const useremail = user.email;
//       user.findOne({ email: useremail })
//         .then((data) => {
//           res.send({ status: "ok", data: data });
//         })
//         .catch((error) => {
//           res.send({ status: "error", data: error });
//         });
//     } catch (error) {}
//   });
// app.listen(5000,()=>{
//     console.log('Started');
// });