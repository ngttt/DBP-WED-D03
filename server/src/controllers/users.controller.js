const users = [
  {
    id: "1",
    name: "Hieu",
  },
  {
    id: "123123",
    name: "ABC",
  },
  {
    id: "5",
    name: "NGUY",
  },
  {
    id: "8",
    name: "TO",
  },
];

module.exports.getUser = (req, res) => {
  res.status(200).json({
    isSucces: true,
    message: "success",
    users,
  });
};

module.exports.getUserByID = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);

  if (!user) {
    return res.status(400).json({
      isSucces: false,
      message: "not found the id user",
    });
  } else {
    res.status(200).json({
      isSucces: true,
      message: "success",
      user,
    });
  }
};

module.exports.postUser = (req, res) => {
  const { name } = req.body;

  if (!name) {
    return res.status(400).json({
      isSucces: false,
      message: "invalid name",
    });
  }

  users.push({
    id: users.length + 1,
    name: name,
  });

  res.status(200).json({
    isSucces: true,
    message: "success",
    users,
  });
};

module.exports.deleteUser = (req, res) => {
  const { id } = req.params;
  let index = -1;

  for (let i = 0; i < users.length; i++) {
    if (users[i].id === id) {
      index = i;
    }
  }

  if (index === -1) {
    return res.status(400).json({
      isSucces: false,
      message: "Not found",
    });
  }

  users.splice(index, 1);

  res.status(200).json({
    isSucces: true,
    message: "success",
    users,
  });
};

module.exports.putUser = (req, res) => {
  const { id } = req.params;
  const user = users.find((user) => user.id === id);
  const change = req.body;

  if (!user) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found",
    });
  }

  console.log(change);
  user.name = change.name;

  return res.status(200).json({
    isSuccess: true,
    message: "Success",
    users,
  });
};
