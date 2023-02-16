import "../componentcss/navbar.css";
import { NavLink } from "react-router-dom";
const Navbar = () => {
  return (
    <nav className="navbar fixed-top">
      {/* This is dropdown  */}

      {/* This is dropdown  */}

      <section className="mid-navbar">
        <NavLink to="/">
          <div className="logo">
            <img
              src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png"
              alt="logo"
            />
          </div>
        </NavLink>
        <div className="pages">
          <NavLink to="/">
            <div>
              <i className="fa-solid fa-house-chimney"></i>
            </div>
          </NavLink>
          <NavLink to="/following">
            <div>
              <i className="fa-solid fa-list"></i>
            </div>
          </NavLink>
          <NavLink to="/answer">
            <div>
              <i className="fa-regular fa-pen-to-square"></i>
            </div>
          </NavLink>
          <NavLink to="/spaces">
            <div>
              <i className="fa-solid fa-people-group"></i>
            </div>
          </NavLink>
          <NavLink to="/notifications">
            <div>
              <i className="fa-regular fa-bell"></i>
            </div>
          </NavLink>
          <div className="input">
            <i className="fa-solid fa-magnifying-glass"></i>
            <input type="text" placeholder="Search Quora" />
          </div>
          <div className="tryquora">
            <span>Try Quora+</span>
          </div>
          <div className="user">
            <div class="dropdown">
              <img
                class=" dropdown-toggle"
                type="button"
                data-bs-toggle="dropdown"
                aria-expanded="false"
                src="https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png"
                alt=""
              />
              <ul class="dropdown-menu mt-3" style={{ width: "16rem" }}>

                <div className="my-2 mx-2">
                  <img style={{ width: "50px" }} src="https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png" alt="" />
                </div>

                <h4 className="mx-1">Tejas</h4>

                <hr />
                <li class="dropdown-item">
                  <i className="fa-regular fa-message mx-1"></i>   message
                </li>
                <li class="dropdown-item  mt-1">
                  <i class="fa-solid fa-bullhorn mx-1"></i>   crete Add
                </li>
                <li class="dropdown-item mt-1">
                  <i class="fa-solid fa-dollar-sign  mx-1"></i>  Monetization
                </li>
                <li class="dropdown-item mt-1">
                  <i class="fa-solid fa-chart-simple  mx-1"></i>  Your content & stats
                </li>
                <li class="dropdown-item mt-1">
                  <i class="fa-regular fa-bookmark  mx-1"></i>  Bookmarks
                </li>
                <li class="dropdown-item mt-1">
                  <i class="fa-solid fa-file-pen  mx-1"></i> Drafts
                </li>
                <li class="dropdown-item mt-1">
                  <i class="fa-solid fa-asterisk  mx-1"></i> Try Quora
                </li>
                <hr />
                <li class="dropdown-item">
                  Dark mode
                </li>
                <li class="dropdown-item mt-1">
                  Setting
                </li>
                <li class="dropdown-item mt-1">
                  Language
                </li>
                <li class="dropdown-item mt-1">
                  Help
                </li>
                <li class="dropdown-item ">
                  Logout
                </li>

                <hr />
                <li className="mx-2">
                  About -Careers -Terms -Privacy
                </li>
                <li className="mx-2">
                  About -Careers -Terms -Privacy
                </li>
                {/* <NavLink to="/login">
                  <li class="dropdown-item">
                    Login
                  </li>
                </NavLink>
                <NavLink to="/signup">
                  <li class="dropdown-item">
                    Signup
                  </li>
                </NavLink> */}
              </ul>
            </div>
          </div>
          <div className="earth-icon">
            <i className="fa-solid fa-globe"></i>
          </div>
          <div className="button-addquestion">
            <button>Add Question</button>
          </div>
        </div>
      </section>
    </nav>
  );
};

export default Navbar;
