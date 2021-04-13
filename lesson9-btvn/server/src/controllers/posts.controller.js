const posts = [
  {
    id: "1",
    title:
      "2 năm ly hôn Song Joong Ki, Song Hye Kyo lần đầu công khai khoe quà của 1 nam tài tử đình đám, có ẩn tình gì không đây?",
    content:
      "Động thái mới của Song Hye Kyo đã khiến dân mạng không ngừng xôn xao, bàn tán.",
    time: "25/01/2021",
    comments: [
      {
        author: "Song Joong Ki",
        comment: "ke ng ta i, zo dien",
      },

      {
        author: "Song Hye Kyo",
        comment: "cqqjz",
      },
    ],
  },

  {
    id: "2",
    title:
      "Sở hữu lô đất có vị thế đẹp, vợ chồng Đà Nẵng xây ngôi nhà nhỏ nhưng xuất sắc đến mức lên cả báo Mỹ",
    content:
      "Cặp vợ chồng trẻ hài lòng về toàn bộ ngôi nhà chứ không riêng một không gian nào vì mọi chỗ trong nhà đều rất chill để ...",
    time: "25/02/2021",
    comments: [
      {
        author: "zk-ck",
        comment: "kam on nhoz",
      },

      {
        author: "USA",
        comment: "hong co j nek",
      },
    ],
  },

  {
    id: "3",
    title:
      "Cách tỷ phú giàu nhất châu Á tiêu tiền: Mua boeing làm quà sinh nhật vợ, thuê 600 nhân viên làm việc nhà, xây garage khổng lồ để chứa 168 siêu xe",
    content:
      "Bạn khó có thể hình dung được tỷ phú giáu nhất châu Á hiện tại chi những khoản tiền khổng lồ tới mức nào cho những thú ...",
    time: "25/03/2021",
    comments: [
      {
        author: "ckong",
        comment: "hihi",
      },

      {
        author: "zk",
        comment: "hehe",
      },
    ],
  },
];

module.exports.getPosts = (req, res) => {
  res.status(200).json({
    isSuccess: true,
    message: "success",
    posts,
  });
};

module.exports.getPostByID = (req, res) => {
  const { id } = req.params;
  console.log(id);
  const findpost = posts.find((post) => post.id === id);

  if (!findpost) {
    return res.status(400).json({
      isSuccess: false,
      message: "not found the post",
    });
  }

  res.status(200).json({
    isSuccess: true,
    message: "success",
    findpost,
  });
};

module.exports.postPost = (req, res) => {
  const newPost = req.body;
  let date = new Date();
  let time = date.getDate() + "-" + date.getMonth() + "-" + date.getFullYear();
  const comments = newPost.comments;

  if (!newPost) {
    return res.status(400).json({
      isSuccess: false,
      message: "invalid post",
    });
  }

  posts.push({
    id: posts.length + 1,
    title: newPost.title,
    content: newPost.content,
    time: time,
    comments: comments,
  });

  res.status(200).json({
    isSucces: true,
    message: "success",
    posts,
  });
};

module.exports.deletePost = (req, res) => {
  const { id } = req.params;
  let index = -1;

  for (let i = 0; i < posts.length; i++) {
    if (posts[i].id === id) {
      index = i;
    }
  }

  if (index === -1) {
    return res.status(400).json({
      isSucces: false,
      message: "Not found",
    });
  }

  posts.splice(index, 1);

  res.status(200).json({
    isSucces: true,
    message: "success",
    posts,
  });
};

module.exports.putPost = (req, res) => {
  const { id } = req.params;
  const findpost = posts.find((post) => {
    if (post.id === id) return post;
  });
  let date = new Date();
  let time =
    date.getDate() + "-" + (date.getMonth() + 1) + "-" + date.getFullYear();
  findpost.time = time;
  const change = req.body;

  if (!findpost) {
    return res.status(400).json({
      isSuccess: false,
      message: "Not found",
    });
  }

  Object.assign(findpost, change);

  return res.status(200).json({
    isSuccess: true,
    message: "Success",
    posts,
  });
};
