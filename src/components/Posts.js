import React from "react";
import "../componentcss/posts.css";
import { PostsData } from "../ArrayOfDatas/PostsData";
function Posts() {
  return (
    <div className="posts-entery " >
      <div className="upper-section-post">
        {PostsData.map((e) => (
          <div style={{ marginTop: "5px" }}>
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

            <h6 className="mt-2">{e.question}</h6>
            <div className="post-image">
              <img src={e.image} alt="" />
            </div>
            <div className="lower-post-section">
              <div className="button-up-down">
                <button>
                  <i class="fa-solid fa-arrow-up"></i>
                </button>
                <button>
                  <i class="fa-solid fa-arrow-down"></i>
                </button>
                <button>
                  <i class="fa-regular fa-comment"></i>
                </button>
                <button>
                  <i class="fa-solid fa-rotate"></i>
                </button>
              </div>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}

export default Posts;
