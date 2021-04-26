// const users = [
// {
//   id: "1",
//   name: "Hieu",
// },
// {
//   id: "123123",
//   name: "ABC",
// },
// {
//   id: "5",
//   name: "NGUY",
// },
// {
//   id: "8",
//   name: "TO",
// },
// ];

const User = require("../models/user.model");

module.exports.getUser = async (req, res) => {
  const users = await User.find();
  res.status(200).json({
    isSucces: true,
    message: "success got all users",
    users,
  });
};

module.exports.getUserByID = async (req, res) => {
  const { id } = req.params;
  const user = await User.findById(id);

  if (!user) {
    return res.status(400).json({
      isSucces: false,
      message: "not found the id user",
    });
  } else {
    res.status(200).json({
      isSucces: true,
      message: "success got user",
      user,
    });
  }
};

module.exports.postUser = (req, res) => {
  const { email, password, firstName, lastName, birthday, isMale } = req.body;

  if (!email || !password || !firstName || !lastName || !birthday) {
    return res.status(400).json({
      isSuccess: false,
      message: "missing require fields",
    });
  }

  const newUser = new User({ ...req.body });

  newUser.save(function (err, doc) {
    if (err) {
      return res.status(500).json({
        isSuccess: false,
        message: "database error",
      });
    } else {
      res.status(200).json({
        isSuccess: true,
        message: "user is successfully create",
        newUser: doc,
      });
    }
  });
};

// module.exports.deleteUser = (req, res) => {
//   const { id } = req.params;
//   let index = -1;

//   for (let i = 0; i < users.length; i++) {
//     if (users[i].id === id) {
//       index = i;
//     }
//   }

//   if (index === -1) {
//     return res.status(400).json({
//       isSucces: false,
//       message: "Not found",
//     });
//   }

//   users.splice(index, 1);

//   res.status(200).json({
//     isSucces: true,
//     message: "success",
//     users,
//   });
// };

module.exports.putUser = (req, res) => {
  const { id } = req.params;

  User.findByIdAndUpdate(id, req.body, function (err, doc) {
    if (err) {
      return res.status(500).json({
        isSuccess: false,
        message: "update failed",
      });
    }

    res.status(200).json({
      isSuccess: true,
      meassage: "update success",
      updatedUser: { ...doc._doc, ...req.body },
    });
  });
};
