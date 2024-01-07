import React, { useRef, useEffect, useState } from "react";
import { Link } from "react-router-dom";
import "./navBar.css";
import { GiBowlOfRice } from "react-icons/gi";
import {
  AccountCircle,
  Home,
  Login,
  Logout,
  PersonAdd,
  RestaurantMenu,
  Menu,
  NightlightRound,
  LightMode,
} from "@mui/icons-material";
import logo from "../../Images/logo6.png";
import { useSelector, useDispatch } from "react-redux";
import { logOutAction } from "../../redux/actions/users";

function NavBar() {
  const navRef = useRef();
  const btnRef = useRef();
  const [dropMenu, setDropMenu] = useState("mobileMenuInit");
  const [navClass, setNavClass] = useState("navBar");
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
    document.querySelector("header").classList.toggle("dark-mode-nav");
    document.querySelector("body").classList.toggle("dark-mode");
    document.querySelector("footer").classList.toggle("dark-mode-footer");
    document.querySelector("main").classList.toggle("dark-mode-homePage");
    setNavClass((old) => (old === "navBar" ? "dark-mode-nav" : "navBar"));
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
    <header>
      <div className="navBar-Logo">
        <Link className="navLinkLogo" to={"/home"}>
          <img src={logo} alt="resturantLogo" />
        </Link>
      </div>

      <div className="rSideNav">
        {signedIn && <div>Hi,&nbsp;{signedIn.username.toUpperCase()}</div>}
        <div className={dropMenu} ref={navRef}>
          <ul className="menu-List">
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
                  <Link
                    className="navLink"
                    to={"/signin"}
                    onClick={showNavMenu}
                  >
                    <Login className="icon" />
                    <span>Sign In</span>
                  </Link>
                </li>
                <li>
                  <Link
                    className="navLink"
                    to={"/signup"}
                    onClick={showNavMenu}
                  >
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
          </ul>
        </div>
        <div className="navIcons">
          <div
            className="darkIcon"
            onClick={() => {
              darkMood();
            }}
          >
            {navClass === "navBar" ? (
              <NightlightRound fontSize="small" />
            ) : (
              <LightMode fontSize="small" />
            )}
          </div>
          <div className="nav-btn " ref={btnRef} onClick={showNavMenu}>
            <Menu />
          </div>
        </div>
      </div>
    </header>
  );
}

export default NavBar;
