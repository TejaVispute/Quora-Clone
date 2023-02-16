import React from "react";
import "../componentcss/posts.css";
import { PostsData } from "../ArrayOfDatas/PostsData";
function Posts() {
  return (
    <div className="posts-entery">
      <div className="upper-section-post">
        {PostsData.map((e) => (
          <>
            <div className="logo-name">
              <div className="logofuser">
                <img src={e.userlogo} alt="" />
              </div>
              <div className="name-follow-answer-wrapper">
                <div className="name-follow">
                  <h6>
                    {e.name} <a href="/follow"> follow</a>
                  </h6>
                </div>
                <div className="answerby">{e.answeredby}</div>
              </div>
            </div>

            <h5 className="mt-2">{e.question}</h5>
            <div className="post-image">
              <img src={e.image} alt="" />
            </div>
          </>
        ))}
      </div>
      <div className="lower-post-section">
        <i class="fa-solid fa-arrow-up"></i>
      </div>
    </div>
  );
}

export default Posts;
