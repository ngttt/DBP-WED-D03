const login = {
  account: "tien.tien",
  password: "123456",
};

module.exports.postLogin = (req, res) => {
  const loginNew = req.body;
  if (
    loginNew.account === login.account &&
    loginNew.password === login.password
  ) {
    res.status(200).json({
      isSuccess: true,
      message: "success",
    });
  } else {
    return res.status(400).json({
      isSuccess: false,
      message: "wrong account or password",
    });
  }
};
