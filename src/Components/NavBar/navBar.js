import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import { FaBars } from "react-icons/fa";
import { GiBowlOfRice } from "react-icons/gi";
import NightlightRoundIcon from "@mui/icons-material/NightlightRound";
import {
  AccountCircle,
  Home,
  Login,
  Logout,
  PersonAdd,
  RestaurantMenu,
} from "@mui/icons-material";
import logo from "../../Images/logo6.png";
// import SignOut from "../SignOut/signOut";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../redux/actions/users";

function NavBar() {
  const navRef = useRef();
  const btnRef = useRef();
  const [dropMenu, setDropMenu] = useState("mobileMenuInit");
  const dispatch = useDispatch();

  const showNavMenu = () => {
    setDropMenu((old) =>
      old === "mobileMenuOut" || old === "mobileMenuInit"
        ? "mobileMenuIn"
        : "mobileMenuOut"
    );
  };
  const handleLogOut = () => {
    dispatch(logOutAction());
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
    if (dropMenu === "mobileMenuOut")
      setTimeout(() => {
        setDropMenu("mobileMenuInit");
      }, 600);
  }, [dropMenu]);

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
            onClick={() => {
              darkMood();
              showNavMenu();
            }}
          >
            <div className="navLink">
              <NightlightRoundIcon className="icon" />
              <span>Mode</span>
            </div>
          </li>
          <li>
            <Link className="navLink" to={"/home"} onClick={showNavMenu}>
              <Home className="icon" />
              <span>Home</span>
            </Link>
          </li>
          <li>
            <Link className="navLink" to={"/category"} onClick={showNavMenu}>
              <RestaurantMenu className="icon" />
              <span>Menu</span>
            </Link>
          </li>
          {isSignedIn && !isTableTokenAvailable && (
            <li>
              <Link className="navLink" to={"/profile"} onClick={showNavMenu}>
                <AccountCircle className="icon" />
                <span>Profile</span>
              </Link>
            </li>
          )}

          {isSignedIn || isTableTokenAvailable ? null : (
            <>
              <li>
                <Link className="navLink" to={"/signin"} onClick={showNavMenu}>
                  <Login className="icon" />
                  <span>Sign In</span>
                </Link>
              </li>
              <li>
                <Link className="navLink" to={"/signup"} onClick={showNavMenu}>
                  <PersonAdd className="icon" />
                  <span>Sign Up</span>
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
            <li>
              <Link
                className="navLink"
                to={"/"}
                onClick={() => {
                  showNavMenu();
                  handleLogOut();
                }}
              >
                <Logout className="icon" />
                <span>Logout</span>
              </Link>
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
