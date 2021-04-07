const logins = [
  {
    account: "tien.tien",
    password: "123456",
  },

  {
    account: "nguyenthithuytien",
    password: "123456",
  },

  {
    account: "ngth.thuy.tien",
    password: "123456",
  },
];

module.exports.postLogin = (req, res) => {
  const loginNew = req.body;
  console.log(loginNew);

  const findLogin = logins.find((login) => login.account === loginNew.account);

  if (!findLogin) {
    return res.status(400).json({
      isSuccess: false,
      message: "wrong account or password",
    });
  }

  if (loginNew.password === findLogin.password) {
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
