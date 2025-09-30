const User = require("../Models/User.js");
export const UpdateProfile = async (req, res) => {
  try {
    let profileImage = "";
    if (req.file) {
      // profileImage = await uploadOnCloudinary(req.file.path);
      profileImage = "";
    }

    let user = await User.findByIdAndUpdate(
      req.userId,
      { profileImage },
      { new: true }
    );

    return res.status(200).json(user);
  } catch (error) {
    console.error(error);
    return res.status(500).json({ message: "Update Profile" });
  }
};

module.exports = UpdateProfile;
// export const like = async (req, resp) => {
//   try {
//     let postId = req.params.id;
//     let userId = req.userId;
//     let post = await post.findById(postId);
//     if (!post) {
//       return resp.status(400).json({ message: "Post not Found" });
//     }
//     if (post.like.includes(userId)) {
//       // jo pela thi user ni like include aetale kareli hase to ae user ni id filter kari dese.
//       post.like.filter((id) => id != userId);
//     } else {
//       post.like.push(userId);
//     }
//     await post.save(); //aa save function direct end ma save kari dese.

//     return resp.status(200).json(post);
//   } catch (error) {
//     return resp.status(500).json({ message: `like error ${error}` });
//   }
// };
// export const comment = async (req, resp) => {
//   try {
//     let postId = req.params.id;
//     let userId = req.userId;
//     let post = await post.findById(postId);
//     if (!post) {
//       return resp.status(400).json({ message: "Post not Found" });
//     }
//     if (post.like.includes(userId)) {
//       // jo pela thi user ni like include aetale kareli hase to ae user ni id filter kari dese.
//       post.like.filter((id) => id != userId);
//     } else {
//       post.like.push(userId);
//     }
//     await post.save(); //aa save function direct end ma save kari dese.

//     return resp.status(200).json(post);
//   } catch (error) {
//     return resp.status(500).json({ message: `like error ${error}` });
//   }
// };
