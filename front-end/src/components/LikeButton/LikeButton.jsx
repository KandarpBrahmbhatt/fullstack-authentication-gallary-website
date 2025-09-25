import React, { useState } from 'react'
import { AiFillLike } from "react-icons/ai";
import { AiOutlineLike } from "react-icons/ai";
import { AiOutlineDislike } from "react-icons/ai";
import "../LikeButton/LikeButton.css"
const LikeButton = () => {

    const [liked,setLiked] = useState(false)
    const [disliked,setdisLiked] = useState(false)
    const[count,setCount] = useState(0)
   const  likeBtn = () => {
        setLiked(!liked)
        setCount(count+1)
   }
   const  dislikeBtn = () => {
        setdisLiked(!liked)
        setCount(count-1)
   }
  
  return (
    <>
    <div className="like">

    <div onClick={likeBtn}>
      <p>{count}</p> {liked ? <AiFillLike />: <AiOutlineLike />} like
    </div>
    <div onClick={dislikeBtn}>
      <AiOutlineDislike /> dislike
    </div>

    </div>
</>
  )
}

export default LikeButton
