import React from "react";
import "./NavBar.css";
import letsplay from "../images/kridangan.png";


const NavBar = () => {
  const redirectlogin = () => {
    window.location.href = "/login";
  };

  const redirectreg = () => {
    window.location.href = "/register";
  };
  return (
    <div class="navbarrr">



      <nav class="navbar navbar-expand-lg fixed-top navbar-custom  ">
        {/* <a class="navbar-brand" href="/#">
          Lets Play
        </a> */}


        <div class="footer-logo">
          <a href="/#">
            <img
              src={letsplay}
              class="img-fluid wow animated bounceIn slower"
              alt=""
            />
          </a>
        </div>



        <button
          class="navbar-toggler my-toggler bg-light bgmenu"
          type="button"
          data-toggle="collapse"
          data-target="#navbar-custom"
          aria-controls="navbar-custom"
          aria-expanded="false"
          aria-label="Toggle navigation">
          <span class="navbar-toggler-icon menuicon"></span>
        </button>
        <div class="collapse navbar-collapse navbar-custom" id="navbar-custom">
          <ul class="navbar-nav  ml-auto linktab">
            <li class="">
              <a class="nav-link " href="/">
                Home
              </a>
            </li>
            <li class="">
              <a class="nav-link " href="/aboutus">
                About Us
              </a>
            </li>
            <li class="nav-item active">
              <a
                class="btn navbtn navBtnReg"
                onclick={redirectlogin}
                href="\login"
              >
                Sign In
              </a>{" "}
            </li>
            <li class="nav-item active">
              <a
                class="btn navbtn navBtnReg"
                onclick={redirectreg}
                href="\register"
              >
                Sign Up
              </a>{" "}
            </li>
          </ul>
        </div>
      </nav>
    </div>
  );
};

export default NavBar;
