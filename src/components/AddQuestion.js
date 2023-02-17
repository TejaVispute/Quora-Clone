import React from "react";
import "../componentcss/addquestions.css";
function AddQuestion() {
  return (
    <div className="add-que-wrapper">
      <div className="upper-qu">
        <div className="user-img">
          <img
            src="https://mymodernmet.com/wp/wp-content/uploads/2019/09/100k-ai-faces-6.jpg"
            alt=""
          />
        </div>
        <div className="addqu">
          <input type="text" placeholder="What do you want to ask share?" />
        </div>
      </div>
      <div className="lower-qu">
        <div>
          <i class="fa-solid fa-question mx-2"></i> Ask
        </div>
        <div>
          {" "}
          <i class="fa-regular fa-pen-to-square mx-2"></i>Answer
        </div>
        <div>
          {" "}
          <i class="fa-solid fa-pencil mx-2"></i>Post
        </div>
      </div>
    </div>
  );
}

export default AddQuestion;
