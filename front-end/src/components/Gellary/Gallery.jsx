import React from 'react'
import "./Gallary.css"
import { items } from"../../data.jsx"
// import { useState } from 'react'
const Gallary = () => {
//   const [gallary,setGallary] = useState([])
//   const [currentPage,setCurrentPage] = useState(1)
//   const [postperpage,setPostperpage] = useState(10)

//   const lastPostIndex = currentPage * postperpage
//   const firstPostIndex = lastPostIndex * postperpage
// const currentPage = gallary.slice(firstPostIndex,lastPostIndex)
  return (
    <>

<nav aria-label="Page navigation example">
  <ul class="pagination">
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Previous">
        <span aria-hidden="true">&laquo;</span>
      </a>
    </li>
    <li class="page-item"><a class="page-link" href="#">1</a></li>
    <li class="page-item"><a class="page-link" href="#">2</a></li>
    <li class="page-item"><a class="page-link" href="#">3</a></li>
    <li class="page-item">
      <a class="page-link" href="#" aria-label="Next">
        <span aria-hidden="true">&raquo;</span>
      </a>
    </li>
  </ul>
</nav>

    <div className='gallery'>
      <h1>Gallery</h1>
      <input type="text" placeholder='Search Hear' />
    </div>

    <div className="product">
       <div className="imges">
                    {items.map((prodct) => (
                        <div className='item'>
                                <img src={prodct.imgSrc} alt="" />
                            <p>{prodct.name}</p>
                        </div>
                    ))}
                </div>
    </div>
    </>
  )
}

export default Gallary
