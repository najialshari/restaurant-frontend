// import { Link } from "react-router-dom";
import "./HomePage.css";
// import menuLogo from "../../Images/menu0.png";
import bg1 from "../../Images/bg1.jpg";
import bg2 from "../../Images/bg2.jpg";
import bg3 from "../../Images/bg3.jpg";
// import logo from "../../Images/logo6.png";
import { BsArrowLeftShort ,BsArrowRightShort} from "react-icons/bs";
import { useEffect, useState } from "react";
const HomePage = () => {
  const data = [bg1,bg2,bg3]
  const [active, setActive] = useState(0);
  useEffect(()=>{
    const id = setInterval(() => {
      if (active >= 2) setActive(0)
      else setActive(prev => prev+1)
   }, 8000);
  return (()=>{
    clearInterval(id)
  })
},[active])

  return (
    <main>
      <div className="homePage">
        {/* <div className="homePageDiv">
          <h2>
            Welcome To{" "}
            <span className="restaurantName">
              <b>LEZZET</b>{" "}
            </span>
            Restaurant
          </h2>
          <h3>Enjoy the unforgettable taste</h3>
          {window.location.pathname === "/home" ? (
            <Link className="homePageLink" to={"/#menuCategories"}>
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
        <div>
          <img
            className="homePageImage"
            alt="404 - QR Code doesn`t work "
            src={menuLogo}
          />
        </div> */}
        <div className="homePageImg">
            {data.map((item,index) => (

            <img
              src={item}
              alt="oo"
              key={index}
              className="homePageImg"
              style={{translate : `${-100* active}%`}}
            />
          
            ))}
          <BsArrowLeftShort
            className="arrow arrow-left"
            onClick={() => (active > 0 ? setActive(active - 1) : setActive(2))}

          />
          <BsArrowRightShort
            className="arrow arrow-right"
            onClick={() => (active < 2 ? setActive(active + 1) : setActive(0))}

          />
        </div>
      </div>
    </main>
  );
};

export default HomePage;
