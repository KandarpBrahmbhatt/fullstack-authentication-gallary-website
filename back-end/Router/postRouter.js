const upload = require("../Middleware/multer.js");
const UpdateProfile = require("../Controller/PostController.js");
const router = require("express").Router();

router.put("/updateprofile", upload.single("profileImage"), UpdateProfile);

module.exports = router;
