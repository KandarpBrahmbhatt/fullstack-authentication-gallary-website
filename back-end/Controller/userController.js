import upload from "../Middleware/multer.js";
import uploadOnCloudinary from "../Models/cloudinary.js";
import userModel from "../Models/User.js";

export const getCurrentUser = async (Req, resp) => {
  try {
    const user = await userModel.findById(req.userId).select("-password");
    if (!user) {
      return resp.status(400).json({ message: "user does not found" });
    }

    return resp.status(200).json(user);
  } catch (error) {
    return resp.status(400).json({ message: "get current user error" });
  }
};

export const updateProfile = async (req, resp) => {
  try {
    let { name, email, password } = req.body;
    let profileImage;
    let productimage;

    if (req.files.profileImage) {
      profileImage = uploadOnCloudinary(req.files.profileImage[0].path);
      productimage = uploadOnCloudinary(req.files.productimage[0].path);
    }
  } catch (error) {}
};
