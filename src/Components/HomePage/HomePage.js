import { Link } from "react-router-dom";
import "./HomePage.css";
import menuLogo from "../../Images/menu0.png";
import logo from "../../Images/logo6.png";

const HomePage = () => {
  console.log("Page path is " + window.location.pathname);

  return (
    <div className="homePage">
      <div className="homePageDiv">
        <div className="navBar-Logo">
          <Link className="navLinkLogo" to={""}>
            <img src={logo} alt="resturantLogo" />
          </Link>
        </div>
        <h2>
          Welcome To{" "}
          <span className="restaurantName">
            {" "}
            <b>LEZZET </b>
          </span>{" "}
          Rerstaurant
          <br />
        </h2>
        <h2>
          Discover and Enjoy The Most Delicious Food And Drinks in Istanbul{" "}
          <br />
        </h2>
        {window.location.pathname === "/home" ? (
          <Link className="homePageLink" to={"/"}>
            {" "}
            <button>Check the Menu</button>{" "}
          </Link>
        ) : (
          <a
            className="homePageLink"
            id="categoriesType"
            href={`#menuCategories`}
          >
            <button>Check the Menu</button>{" "}
          </a>
        )}
      </div>
      <img
        className="homePageImage"
        alt="404 - QR Code doesn`t work "
        // width="50%"
        // src="https://freesvg.org/img/1646582431404-error-404.png"
        src={menuLogo}
      />
    </div>
  );
};

export default HomePage;
