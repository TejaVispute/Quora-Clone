import "../componentcss/navbar.css";
import { NavLink } from 'react-router-dom'
const Navbar = () => {
    return (
        <nav className="navbar">
            <section className="mid-navbar">
                <NavLink to="/">   <div className="logo">
                    <img src="https://upload.wikimedia.org/wikipedia/commons/thumb/9/91/Quora_logo_2015.svg/1200px-Quora_logo_2015.svg.png" alt="logo" />
                </div></NavLink>
                <div className="pages">
                    <NavLink to="/"> <div><i class="fa-solid fa-house-chimney"></i></div></NavLink>
                    <NavLink to="/following"><div><i class="fa-solid fa-list"></i></div></NavLink>
                    <NavLink to="/answer"><div><i class="fa-regular fa-pen-to-square"></i></div></NavLink>
                    <NavLink to="/spaces"> <div><i class="fa-solid fa-people-group"></i></div></NavLink>
                    <NavLink to="/notifications"><div><i class="fa-regular fa-bell"></i></div></NavLink>
                    <div className="input">
                        <i class="fa-solid fa-magnifying-glass"></i>
                        <input type="text" placeholder="Search Quora" />
                    </div>
                    <div className="tryquora">
                        <span>Try Quora+</span>
                    </div>
                    <div className="user">
                        <img src="https://www.pngitem.com/pimgs/m/130-1300253_female-user-icon-png-download-user-image-color.png" alt="" />
                    </div>
                    <div className="earth-icon">
                        <i class="fa-solid fa-globe"></i>
                    </div>
                    <div className="button-addquestion">
                        <button>Add Question</button>
                    </div>
                </div>
            </section>
        </nav>
    )
}

export default Navbar;