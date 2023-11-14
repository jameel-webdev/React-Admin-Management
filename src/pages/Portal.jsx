import React from "react";
import { Outlet } from "react-router-dom";
import Topnavbar from "../components/Header/Topnavbar";
import Sidebar from "../components/Sidebar/Sidebar";
import Footer from "../components/Footer/Footer";

function Portal() {
  return (
    <>
      <div id="wrapper">
        <Sidebar />
        <div id="content-wrapper" class="d-flex flex-column">
          <div id="content">
            <Topnavbar />
            <div class="container-fluid">
              <Outlet></Outlet>
            </div>
          </div>
          <Footer />
        </div>
      </div>
    </>
  );
}

export default Portal;
