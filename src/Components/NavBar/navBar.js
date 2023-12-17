import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import { FaBars } from "react-icons/fa";
import { GiBowlOfRice } from "react-icons/gi";
import { CgDarkMode } from "react-icons/cg";
import logo from "../../Images/logo6.png";
import SignOut from "../SignOut/signOut";
import { useSelector } from "react-redux";

function NavBar() {
  const navRef = useRef();
  const btnRef = useRef();
  const [dropMenu, setDropMenu] = useState("mobileMenuInit");

  const showNavMenu = () => {
    setDropMenu((old) =>
      old === "mobileMenuOut" || old === "mobileMenuInit"
        ? "mobileMenuIn"
        : "mobileMenuOut"
    );
  };

  const darkMood = () => {
    document.querySelector("body").classList.toggle("dark-mode");
  };

  const [isTableTokenAvailable, setIsTableTokenAvailable] = useState({});
  const [isSignedIn, setIsSignedIn] = useState({});
  const tableToken = useSelector((state) => state.qrcodes.data.table);
  const signedIn = useSelector((state) => state.auth.data.user);

  const items = useSelector((state) => state.cart);
  let sum = 0;
  for (let dummy of items) sum += dummy.count;

  useEffect(() => {
    setIsTableTokenAvailable(tableToken);
  }, [tableToken]);

  useEffect(() => {
    setIsSignedIn(signedIn);
  }, [signedIn]);

  return (
    <nav className="navBar">
      <div className="navBar-Logo">
        <Link className="navLinkLogo" to={"/home"}>
          <img src={logo} alt="resturantLogo" />
        </Link>
      </div>
      <button className="nav-btn " ref={btnRef} onClick={showNavMenu}>
        <FaBars />
      </button>
      <div className={dropMenu} ref={navRef}>
        <ul className="menu-List">
          {signedIn && (
            // <div style={{ color: "white" }}>
            <div>Hi,&nbsp;{signedIn.username.toUpperCase()}</div>
          )}
          <li
            className="darkBtn navLink"
            onClick={() => {
              darkMood();
              showNavMenu();
            }}
          >
            <CgDarkMode />
          </li>
          <li>
            <Link className="navLink" to={"/home"} onClick={showNavMenu}>
              Home
            </Link>
          </li>
          <li>
            <Link className="navLink" to={"/category"} onClick={showNavMenu}>
              Categories
            </Link>
          </li>
          {isSignedIn && !isTableTokenAvailable && (
            <li>
              <Link className="navLink" to={"/profile"} onClick={showNavMenu}>
                Profile
              </Link>
            </li>
          )}

          {isSignedIn || isTableTokenAvailable ? null : (
            <>
              <li>
                <Link className="navLink" to={"/signin"} onClick={showNavMenu}>
                  Sign In
                </Link>
              </li>
              <li>
                <Link className="navLink" to={"/signup"} onClick={showNavMenu}>
                  Sign Up
                </Link>
              </li>
            </>
          )}
          {sum > 0 && (
            <li>
              <Link
                className="navLink"
                id="cartLogo"
                to={"/cart"}
                onClick={showNavMenu}
              >
                <GiBowlOfRice
                  style={{
                    marginTop: "-5px",
                    marginBottom: "-5px",
                    fontSize: "30px",
                  }}
                />
                <span>{sum}</span>
              </Link>
            </li>
          )}
          {(isTableTokenAvailable || isSignedIn) && (
            <li className="navLink" onClick={showNavMenu}>
              <SignOut />
            </li>
          )}

          {/* <button className="nav-btn " onClick={showNavMenu}>
            <FaTimes style={{ background: " rgb(220, 178, 40)" }} />
          </button> */}
        </ul>
      </div>
    </nav>
  );
}

export default NavBar;
