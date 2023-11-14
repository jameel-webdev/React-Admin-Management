import React, { useState } from "react";
import { BiSolidUserCircle, BiSolidUser } from "react-icons/bi";
import { FaSignOutAlt, FaBars } from "react-icons/fa";
import { Link } from "react-router-dom";

const Topnavbar = () => {
  const [isVisible, setVisible] = useState(false);
  return (
    <>
      {/* <!-- Topbar --> */}
      <nav className="navbar navbar-expand navbar-light bg-white topbar mb-4 static-top shadow">
        {/* <!-- Sidebar Toggle (Topbar) --> */}
        <button
          id="sidebarToggleTop"
          className="btn btn-link d-md-none rounded-circle mr-3"
        >
          <FaBars />
        </button>

        {/* <!-- Topbar Search --> */}
        {/* <form className="d-none d-sm-inline-block form-inline mr-auto ml-md-3 my-2 my-md-0 mw-100 navbar-search">
          <div className="input-group">
            <input
              type="text"
              className="form-control bg-light border-0 small"
              placeholder="Search for..."
              aria-label="Search"
              aria-describedby="basic-addon2"
            />
            <div className="input-group-append">
              <button className="btn btn-primary" type="button">
                <FontAwesomeIcon icon={faSearch} />
              </button>
            </div>
          </div>
        </form> */}

        {/* <!-- Topbar Navbar --> */}
        <ul className="navbar-nav ml-auto">
          {/* <!-- Nav Item - Search Dropdown (Visible Only XS) --> */}
          {/* <!-- Nav Item - Alerts --> */}
          {/* <!-- Nav Item - Messages --> */}

          <div className="topbar-divider d-none d-sm-block"></div>

          {/* <!-- Nav Item - User Information --> */}
          <li
            className={
              isVisible
                ? "nav-item dropdown no-arrow show"
                : "nav-item dropdown no-arrow"
            }
          >
            <button
              onClick={() => setVisible(!isVisible)}
              className="nav-link dropdown-toggle"
              id="userDropdown"
              role="button"
              data-toggle="dropdown"
              aria-haspopup="true"
              aria-expanded={isVisible}
              style={{ border: "none", background: "none" }}
            >
              <span className="mr-2 d-none d-lg-inline text-dark medium">
                User
              </span>
              <BiSolidUserCircle />
            </button>
            {/* <!-- Dropdown - User Information --> */}
            <div
              className={
                isVisible
                  ? "dropdown-menu dropdown-menu-right shadow animated--grow-in show"
                  : "dropdown-menu dropdown-menu-right shadow animated--grow-in"
              }
              aria-labelledby="userDropdown"
            >
              <div className="dropdown-item">
                <BiSolidUser />
                Profile
              </div>
              <div className="dropdown-divider"></div>
              <Link
                className="dropdown-item"
                to=""
                data-toggle="modal"
                data-target="#logoutModal"
              >
                <FaSignOutAlt />
                Logout
              </Link>
            </div>
          </li>
        </ul>
      </nav>
      {/* <!-- End of Topbar --> */}
    </>
  );
};

export default Topnavbar;
