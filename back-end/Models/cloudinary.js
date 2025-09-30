// import { v2 as cloudinary } from "cloudinary";
const cloudinary = require("cloudinary").v2;
const fs = require("fs");
const uploadOnCloudinary = async (filePath) => {
  // Configuration aa cloudinary mathi copy kari ne lakhiyu 6e.
  cloudinary.config({
    // aa badhi secreat information 6e aene github ma share na karay. aetale aene .env ma lakhi ne process.env thi lakhavanu atiyare nathi lakhiyu pachi lakhavanu 6e.
    cloud_name: "dfk8ghmgh",
    api_key: "522521577221629",
    api_secret: "L6oacTaJf_DPUrI7djerMprewQg", // Click 'View API Keys' above to copy your API secret clodinary ma jai ne potani secrete Api key copy kari ne lakhavanu 6e.
  });

  try {
    if (!filePath) {
      return null;
    }
    // Upload an image cloudinary mathi copy kari ne niche no code lakhiyu 6e.
    const uploadResult = await cloudinary.uploader.upload(filePath);
    fs.unlinkSync(filePath); // file ne delete karase.
    return uploadResult.secure_url;
  } catch (error) {
    fs.unlinkSync(filePath); // file ne delete karase.
    console.log(error);
  }
};

export default uploadOnCloudinary;
