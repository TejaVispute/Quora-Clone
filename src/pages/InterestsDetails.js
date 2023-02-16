import React from "react";
import YourInterests from "../components/YourInterests";
import { useParams } from "react-router-dom";
import "../pagescss/interestdetails.css";
import { Interests } from "../ArrayOfDatas/interestsArr";
function InterestsDetails() {
  let {name} = useParams();
 
  // console.log(Interests)
      let findInArr= Interests.find((value)=>value.field===name);
console.log(findInArr)

  return (
    <div className="main-interest-details">
      <div className="interestdetails-wrapper">
        <div className="left-content-details">{<YourInterests />}</div>
        <div className="mid-content-details">
          <div className="field-img-follow">
            <div className="left-img-details">
              <img
                src={findInArr.icon}
                alt="hii"
              />
            </div>
            <div className="follower-name">
              <h4>{findInArr.field}</h4>
              <div>
                <button>Following {findInArr.following}</button>
                {/* <i class="fa-solid fa-ellipsis"></i> */}
              </div>
            </div>
          </div>
        </div>
        <div className="right-content-details">right</div>
      </div>
    </div>
  );
}

export default InterestsDetails;
