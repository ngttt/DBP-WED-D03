const express = require("express");
const bodyParser = require("body-parser");
const cors = require("cors");

const postsRoute = require("./routers/post.route");
const usersRoute = require("./routers/users.route");
const loginRoute = require("./routers/login.route");

const app = express();
const port = 1999;

app.use(bodyParser.json());
app.use(cors());

//Middleware

app.use("/users", (req, res, next) => {
  console.log("the request reciver at: ", new Date());
  next();
});

app.use("/users", usersRoute);

app.use("/posts", postsRoute);

app.use("/login", loginRoute);

app.get("/", (req, res) => {
  res.send("Hello World!");
});
// app.delete("/users/:id", (req, res) => {
//   const { id } = req.params;
//   const index = -1;
//   for (let i = 0; i < users.length; i++) {
//     if (id === users.id) {
//       index = i;
//     }
//   }
//   if (!user) {
//     return res.status(400).json({
//       isSucces: false,
//       message: "not found the id user",
//     });
//   } else {
//     users.slice(index, index + 1);
//     return res.status(200).json({
//       isSucces: true,
//       message: "success",
//       user,
//     });
//   }
// });

app.listen(port, () => {
  console.log(`Example app listening at http://localhost:${port}`);
});
