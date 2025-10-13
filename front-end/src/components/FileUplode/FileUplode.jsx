import React, { useRef, useState } from "react";
import "../FileUplode/FileUplode.css";
import axios from "axios";

const FileUplode = () => {
  const [frontendImage, setfrontendImage] = useState("");
  const [backendImage, setbackendImage] = useState("");

  // let image1 = useRef;
  const inputRef = useRef(null);
  const [image, setImage] = useState(null);
  const serverUrl = "http://localhost:8080/"; // backend URL

  const handleImageClick = () => inputRef.current.click();

  const handleImageChange = (e) => {
    const file = e.target.files[0];
    setImage(file);
    setbackendImage(file);
    setfrontendImage(URL.createObjectURL(file));
  };
  async function handleUploadPost() {
    try {
      let formdata = new FormData();
      if (backendImage) {
        formdata.append("image", backendImage);
      }

      let result = await axios.post(serverUrl + "/post/create", formdata, {
        withCredentials: true,
      });
      console.log(result);
    } catch (error) {
      console.log(error);
    }
  }
  const handleSaveProfile = async () => {
    if (!image) return alert("Please select an image first!");

    try {
      const formdata = new FormData();
      formdata.append("profileImage", image);
      formdata.append("userId", "YOUR_USER_ID_HERE"); // send userId if needed

      const result = await axios.put(
        `${serverUrl}/user/updateprofile`,
        formdata,
        { headers: { "Content-Type": "multipart/form-data" } }
      );

      console.log("Upload success:", result.data);
      alert("Profile updated!");
    } catch (error) {
      console.error("Upload failed:", error);
      alert("Upload failed!");
    }
  };

  return (
    <div>
      <div className="fileuplode" onClick={handleImageClick}>
        {image ? (
          <img src={URL.createObjectURL(image)} alt="preview" />
        ) : (
          <img
            src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2NAjCcjjk7ac57mKCQvgWVTmP0ysxnzQnQ&s"
            alt="default"
          />
        )}
      </div>

      <input
        type="file"
        ref={inputRef}
        onChange={handleImageChange}
        style={{ display: "none" }}
      />
      <button onClick={handleUploadPost}>post</button>
      <div>
        <img src={frontendImage || ""} alt="" />
      </div>
      <button onClick={handleSaveProfile} style={{ marginTop: 10 }}>
        Save Profile
      </button>
    </div>
  );
};

export default FileUplode;
