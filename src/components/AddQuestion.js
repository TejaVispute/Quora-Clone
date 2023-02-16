import React from 'react'
import '../componentcss/addquestions.css'
function AddQuestion() {
    return (
        <div className="add-que-wrapper">
            <div className="upper-qu">
                <div className="user-img">
                    <img src="https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png" alt="" />
                </div>
                <div className="addqu">
                    <input type="text" placeholder='What do you want to ask share?' />
                </div>
            </div>
            <div className="lower-qu">
                <div><i class="fa-solid fa-question mx-2"></i> Ask</div>
                <div> <i class="fa-regular fa-pen-to-square mx-2"></i>Answer</div>
                <div> <i class="fa-solid fa-pencil mx-2"></i>Post</div>
            </div>
        </div>
    )
}

export default AddQuestion