import { useState } from "react";
import "./Gallary.css";
import { items } from "../../data.jsx";
import FileUplode from "../FileUplode/FileUplode.jsx";
import LikeButton from "../LikeButton/LikeButton.jsx";
import { FaComments } from "react-icons/fa";
import { Link } from "react-router-dom";
import BootstrapModel from "../BootstrapModel/BootstrapModel.jsx";
const Gallary = () => {
  const [currentPage, setCurrentPage] = useState(1); //This is a state variable that stores the current page number.
  const itemsPerPage = 10; // how many items per page

  // Calculate start & end indexes for slicing items
  const indexOfLastItem = currentPage * itemsPerPage; //indexOfLastItem = 1 * 10 = 10
  const indexOfFirstItem = indexOfLastItem - itemsPerPage; //indexOfFirstItem = 10 - 10 = 0
  const currentItems = items.slice(indexOfFirstItem, indexOfLastItem);

  // Total pages
  const totalPages = Math.ceil(items.length / itemsPerPage);

  // Page change handlers
  const goToNextPage = () => {
    if (currentPage < totalPages) setCurrentPage(currentPage + 1);
  };

  const goToPrevPage = () => {
    if (currentPage > 1) setCurrentPage(currentPage - 1);
  };

  return (
    <>
      <div className="gallery">
        <h1>Gallery</h1>

        <input type="text" placeholder="Search Here" />
        <FileUplode />
      </div>

      <div className="product">
        <div className="imges">
          {currentItems.map((prodct, index) => (
            <div className="item" key={index}>
              <img src={prodct.imgSrc} alt={prodct.name} />
              <p>{prodct.name}</p>
              <div className="multipal-button">
                <LikeButton /> {/*likebutton */}
                {/*CommentButton */}
                {/* <Comment /> */}
                <BootstrapModel />
              </div>
            </div>
          ))}
        </div>
      </div>
      {/* Pagination Controls */}
      <div className="pagination">
        <button onClick={goToPrevPage} disabled={currentPage === 1}>
          Prev
        </button>
        <span>
          Page {currentPage} of {totalPages}
        </span>
        <button onClick={goToNextPage} disabled={currentPage === totalPages}>
          Next
        </button>
      </div>
    </>
  );
};

export default Gallary;
