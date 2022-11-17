import React from "react";
import Footer from "./Footer";

function ReviewForm() {
  const handleSubmit = (e) => {
    // e.preventDefault();
  };

  const handleReview = () => {
    alert("Thanks for your review!");
  };

  return (
    <div>
      <div className="review">
        <h2 className="h2">What are you reviewing?</h2>

        <div className="search_panel-01">
          <h3 className="h3">car model</h3>
          <span>
            <i className="ri-search-line"></i>
          </span>
          <input
            className="input"
            type="text"
            placeholder="Example toyota,BMW,Mazda"
          />
        </div>
        <div className="textarea-01">
          <form onSubmit={handleSubmit}>
            <h5 className="h5">Leave your comment</h5>
            <textarea
              placeholder="Leave your review"
              rows="4"
              cols="50"
            ></textarea>
            <h5 className="h5">Leave your rating (1-10)</h5>

            <input
              className="input"
              type="number"
              min="1"
              max="10"
              placeholder="add-rating"
            ></input>
            <button
              type="submit"
              className="registerbtn"
              onClick={handleReview}
              href="/"
            >
              Submit Review
            </button>
          </form>
        </div>
      </div>
      <Footer></Footer>
    </div>
  );
}
export default ReviewForm;
