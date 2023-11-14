import React, { useState } from "react";
import { Link } from "react-router-dom";
import { BsEmojiSmile, BsSpeedometer2 } from "react-icons/bs";
import { FaChalkboardTeacher } from "react-icons/fa";
import { PiStudentBold } from "react-icons/pi";
const Sidebar = () => {
  const [isVisible, setVisible] = useState(false);
  const [isVisible1, setVisible1] = useState(false);
  return (
    <>
      <ul
        className="navbar-nav bg-gradient-primary sidebar sidebar-dark accordion"
        id="accordionSidebar"
      >
        {/* <!-- Sidebar - Brand --> */}
        <Link
          to={"/"}
          className="sidebar-brand d-flex align-items-center justify-content-center"
          href="index.html"
        >
          <div className="sidebar-brand-icon rotate-n-15">
            <BsEmojiSmile />
          </div>
          <div className="sidebar-brand-text mx-3">
            SB Admin <sup>2</sup>
          </div>
        </Link>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider my-0" />

        {/* <!-- Nav Item - Dashboard --> */}
        <li className="nav-item active">
          <Link className="nav-link" to="/">
            <BsSpeedometer2 className="mr-2" />
            <span>Dashboard</span>
          </Link>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        <div className="sidebar-heading">Interface</div>

        {/* <!-- Nav Item - Pages Collapse Menu --> */}
        <li className="nav-item">
          <button
            onClick={() => setVisible(!isVisible)}
            className={isVisible ? "nav-link" : "nav-link collapsed"}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded={isVisible}
            aria-controls="collapseTwo"
            style={{ border: "none", background: "none" }}
          >
            <FaChalkboardTeacher className="mr-2" />
            <span>Teacher</span>
          </button>
          <div
            id="collapseTwo"
            className={isVisible ? "collapse show" : "collapse"}
            aria-labelledby="headingTwo"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Teacher Database</h6>
              <Link className="collapse-item" to="/teacher">
                View
              </Link>
              {/* <Link className="collapse-item" to="components/cards">
                Edit
              </Link>
              <Link className="collapse-item" to="components/cards">
                Update
              </Link>
              <Link className="collapse-item" to="components/cards">
                Delete
              </Link> */}
            </div>
          </div>
        </li>

        {/* <!-- Nav Item - Utilities Collapse Menu --> */}
        <li className="nav-item">
          <button
            onClick={() => setVisible1(!isVisible1)}
            className={isVisible1 ? "nav-link" : "nav-link collapsed"}
            data-toggle="collapse"
            data-target="#collapseTwo"
            aria-expanded={isVisible1}
            aria-controls="collapseTwo"
            style={{ border: "none", background: "none" }}
          >
            <PiStudentBold className="mr-2" />
            <span>Student</span>
          </button>
          <div
            id="collapseUtilities"
            className={isVisible1 ? "collapse show" : "collapse"}
            aria-labelledby="headingUtilities"
            data-parent="#accordionSidebar"
          >
            <div className="bg-white py-2 collapse-inner rounded">
              <h6 className="collapse-header">Student Database</h6>
              <Link className="collapse-item" to="/student">
                View
              </Link>
              {/* <Link className="collapse-item" to="components/cards">
                Edit
              </Link>
              <Link className="collapse-item" to="components/cards">
                Update
              </Link>
              <Link className="collapse-item" to="components/cards">
                Delete
              </Link> */}
            </div>
          </div>
        </li>

        {/* <!-- Divider --> */}
        <hr className="sidebar-divider" />

        {/* <!-- Heading --> */}
        {/* <!-- Nav Item - Pages Collapse Menu --> */}

        {/* <!-- Nav Item - Charts --> */}

        {/* <!-- Nav Item - Tables --> */}

        {/* <!-- Divider --> */}

        {/* <!-- Sidebar Toggler (Sidebar) --> */}
        {/* <div className="text-center d-none d-md-inline">
          <button
            className="rounded-circle border-0"
            id="sidebarToggle"
          ></button>
        </div> */}
      </ul>
    </>
  );
};

export default Sidebar;
