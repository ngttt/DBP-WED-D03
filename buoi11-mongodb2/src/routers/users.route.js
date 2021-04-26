var express = require("express");
var router = express.Router();

const usersController = require("../controllers/users.controller");

router.get("/", usersController.getUser);

router.get("/:id", usersController.getUserByID);

router.post("/", usersController.postUser);

// router.delete("/:id", usersController.deleteUser);

router.put("/:id", usersController.putUser);
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

module.exports = router;
