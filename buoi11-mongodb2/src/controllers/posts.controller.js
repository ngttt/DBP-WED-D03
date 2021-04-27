// const posts = [
//   {
//     id: "1",
//     title:
//       "2 năm ly hôn Song Joong Ki, Song Hye Kyo lần đầu công khai khoe quà của 1 nam tài tử đình đám, có ẩn tình gì không đây?",
//     content:
//       "Động thái mới của Song Hye Kyo đã khiến dân mạng không ngừng xôn xao, bàn tán.",
//     time: "25/01/2021",
//     comments: [
//       {
//         author: "Song Joong Ki",
//         comment: "ke ng ta i, zo dien",
//       },

//       {
//         author: "Song Hye Kyo",
//         comment: "cqqjz",
//       },
//     ],
//   },

//   {
//     id: "2",
//     title:
//       "Sở hữu lô đất có vị thế đẹp, vợ chồng Đà Nẵng xây ngôi nhà nhỏ nhưng xuất sắc đến mức lên cả báo Mỹ",
//     content:
//       "Cặp vợ chồng trẻ hài lòng về toàn bộ ngôi nhà chứ không riêng một không gian nào vì mọi chỗ trong nhà đều rất chill để ...",
//     time: "25/02/2021",
//     comments: [
//       {
//         author: "zk-ck",
//         comment: "kam on nhoz",
//       },

//       {
//         author: "USA",
//         comment: "hong co j nek",
//       },
//     ],
//   },

//   {
//     id: "3",
//     title:
//       "Cách tỷ phú giàu nhất châu Á tiêu tiền: Mua boeing làm quà sinh nhật vợ, thuê 600 nhân viên làm việc nhà, xây garage khổng lồ để chứa 168 siêu xe",
//     content:
//       "Bạn khó có thể hình dung được tỷ phú giáu nhất châu Á hiện tại chi những khoản tiền khổng lồ tới mức nào cho những thú ...",
//     time: "25/03/2021",
//     comments: [
//       {
//         author: "ckong",
//         comment: "hihi",
//       },

//       {
//         author: "zk",
//         comment: "hehe",
//       },
//     ],
//   },
// ];

const Post = require("../models/post.model");

module.exports.getPosts = async (req, res) => {
  const posts = await Post.find();
  res.status(200).json({
    isSuccess: true,
    message: "got success all posts",
    posts,
  });
};

module.exports.getPostByID = async (req, res) => {
  const { id } = req.params;
  const post = await Post.findById(id);

  if (!post) {
    return res.status(400).json({
      isSuccess: false,
      message: "not found the post",
    });
  }

  res.status(200).json({
    isSuccess: true,
    message: "got post successfuly",
    post,
  });
};

module.exports.postPost = (req, res) => {
  const { author, body, reaction, comments } = req.body;

  if (!author || !body || !reaction || !comments) {
    return res.status(400).json({
      isSuccess: false,
      message: "missing",
    });
  }

  const newPost = new Post({ ...req.body });

  newPost.save(function (err, doc) {
    if (err) {
      return res.status(500).json({
        isSucces: false,
        message: "database error",
      });
    } else {
      res.status(200).json({
        isSucces: true,
        message: "success",
        newPost: doc,
      });
    }
  });
};

module.exports.deletePost = (req, res) => {
  const { id } = req.params;

  Post.findByIdAndDelete(id, function (err) {
    if (err) {
      return res.status(500).json({
        isSucces: false,
        message: "delete failed",
      });
    }

    res.status(200).json({
      isSucces: true,
      message: "delete success",
    });
  });
};

module.exports.putPost = (req, res) => {
  const { id } = req.params;
  Post.findByIdAndUpdate(id, req.body, function (err, doc) {
    if (err) {
      return res.status(500).json({
        isSuccess: false,
        message: "update failed",
      });
    }

    return res.status(200).json({
      isSuccess: true,
      message: "update uccess",
      updatePosts: { ...doc._doc, ...req.body },
    });
  });
};
