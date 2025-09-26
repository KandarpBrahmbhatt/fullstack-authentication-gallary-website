import React, { useState } from "react";
import "../Comment/Comment.css";

const Comment = () => {
  const [comment, setComment] = useState();
  const [comments, setComments] = useState([]); //Declares comments (an array of submitted comments) and setComments to update it.
  const onchangeHandle = (e) => {
    setComment(e.target.value);
  };
  const onClickHandle = (e) => {
    setComments((comments) => [...comments, comment]);
  };

  return (
    <>
      <div className="comment">
        {comments.map((text) => (
          <div className="coment">{text}</div>
        ))}
        <textarea
          name=""
          id=""
          value={comment}
          onChange={onchangeHandle}
        ></textarea>
        <button onClick={onClickHandle}>submit</button>
      </div>

      {/* models */}
    </>
  );
};

export default Comment;
