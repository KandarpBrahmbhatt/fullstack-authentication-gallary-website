// import multer from "multer";
import multer from "multer";

// multer ek storeage banavse and ae file ne disk storage ma save kari dese. pachi ae file ne req.file use karine ae file ne aecess kari sakase.
let storage = multer.diskStorage(
  // image user upaload kare ae kya store thase ae lakhavanu 6e niche.
  {
    destination: (req, file, cb) => {
      cb(null, "../public");
    },
    // kaya name thi store karishu ae lakhiyu 6e.
    filename: (req, file, cb) => {
      cb(null, file.originalname);
    },
  }
);

const upload = multer({ storage }); // badhe a upaload ne j mokalshu

module.exports = upload;
