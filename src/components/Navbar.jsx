import "./Navbar.css";
import { NavLink } from "react-router-dom";
import { List } from "react-bootstrap-icons";
import { useState } from "react";
import { Person } from "react-bootstrap-icons";
import { Cart3 } from "react-bootstrap-icons";
import Login from "./Login";
import Cart from "./Cart";
import myLogo from "./image/logo.svg";


function Navbar() {
  const [showMenu, setShowMenu] = useState(false);
  const [showModalLogin, setShowModalLogin] = useState(false);

  const handleClose = () => setShowModalLogin(false);
  const handleShow = () => setShowModalLogin(true);
  return (
    <>
      <div className="container-fluid ">
        <div className="row">
          <div className="col-10 mx-auto">
            <nav className="navbar navbar-expand-lg navbar-light navbar-bg ">
              <img className="logo" src={myLogo} alt="logo" />
              <button
                className="navbar-toggler text-white fs-1"
                type="button"
                data-toggle="collapse"
                data-target="#navbarSupportedContent"
                aria-controls="navbarSupportedContent"
                aria-expanded={showMenu}
                aria-label="Toggle navigation"
                onClick={() => setShowMenu(!showMenu)}
              >
                <List />
              </button>

              <div
                className={`collapse justify-content-between navbar-collapse ${
                  showMenu ? "show" : null
                }`}
                id="navbarSupportedContent"
              >
                <ul className="navbar-nav mr-auto mx-5">
                  <li className="nav-item active">
                    <NavLink
                      className="nav-link navbar-link font-weight-bold px-3"
                      to="/"
                    >
                      <span data-content="Our Story" aria-hidden="true"></span>
                      Our Story
                    </NavLink>
                  </li>
                  <li className="nav-item dropdown">
                    <NavLink
                      className="nav-link navbar-link font-weight-bold dropdown-toggle Projects"
                      to="/Projects"
                      id="navbarDropdown"
                      data-bs-toggle="dropdown"
                      aria-expanded="false"
                    >
                      Projects
                    </NavLink>
                    <div
                      className="dropdown-menu"
                      aria-labelledby="navbarDropdown"
                    >
                      <NavLink className="dropdown-item " to="/Action">
                        Action
                      </NavLink>
                      <NavLink className="dropdown-item" to="/Another action">
                        Another action
                      </NavLink>
                      <div className="dropdown-divider"></div>
                      <NavLink className="dropdown-item" to="/">
                        Something else here
                      </NavLink>
                    </div>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link navbar-link font-weight-bold mx-3"
                      to="/Portfolio"
                    >
                      Portfolio
                    </NavLink>
                  </li>
                  <li className="nav-item">
                    <NavLink
                      className="nav-link navbar-link font-weight-bold mx-3"
                      to="/Careers"
                    >
                      Careers
                    </NavLink>
                  </li>
                </ul>
                <div className="d-flex align-items-center">
                  <div className="d-flex fs-2">
                    <div className="icon-cart d-flex justify-content-center">
                      <div className="nav-icon icon-cart-svg d-flex justify-content-center">
                        <Cart3 className="p-1" />
                      </div>
                      <Cart />
                    </div>
                    <div className="nav-icon icon-person" onClick={handleShow}>
                      <Person className="p-1" />
                    </div>
                    <Login show={showModalLogin} handleClose={handleClose} />
                  </div>
                  <div className="navbar-nav banner-left text-menu-left py-3 w-3">
                    <marquee>Work with us</marquee>
                  </div>
                </div>
              </div>
            </nav>
          </div>
        </div>
      </div>
    </>
  );
}

export default Navbar;
