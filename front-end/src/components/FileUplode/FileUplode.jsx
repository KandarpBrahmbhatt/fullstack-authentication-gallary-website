import React, { useRef, useState } from 'react'
import "../FileUplode/FileUplode.css"
const FileUplode = () => {
    const inputRef = useRef(null)
    const [image,setImage]= useState()
    const handleImageClick = () =>{
        inputRef.current.click() // image par click kariye to pan thay uplaode file aetale lakhiyu 6e.
    }
    const handleImageChange =(e)=>{
        const file = e.target.files[0];
        console.log(file)
        setImage(e.target.files[0])
    }

  return (
    <div className='fileuplode' onClick={handleImageClick}>
      {/* <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2NAjCcjjk7ac57mKCQvgWVTmP0ysxnzQnQ&s" alt="" /> */}
      {/* URL.createObjectURL creates a temporary URL for the selected file to display it in the browser.
Otherwise, display a default placeholder image. */}
      {image ?( <img src={URL.createObjectURL(image)} alt=''/>) : (<img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRd2NAjCcjjk7ac57mKCQvgWVTmP0ysxnzQnQ&s" alt="" />)}
      <input type="file" ref={inputRef} onChange={handleImageChange} style={{display:"none"}}/>

    </div>
  )
}

export default FileUplode
