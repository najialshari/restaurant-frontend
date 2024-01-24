// import { Link } from "react-router-dom";
// import menuLogo from "../../Images/menu0.png";
import "./HomePage.css";
import bg1 from "../../Images/bg1.jpg";
import bg2 from "../../Images/bg2.jpg";
import bg3 from "../../Images/bg3.jpg";
// import logo from "../../Images/logo6.png";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useEffect, useState } from "react";
const HomePage = () => {
  const data = [bg1, bg2, bg3];
  const [active, setActive] = useState(0);

  const handleNext = () => {
    setActive(active === data.length - 1 ? 0 : active + 1);
  };
  const handlePrev = () => {
    setActive(active === 0 ? data.length - 1 : active - 1);
  };
  useEffect(() => {
    setActive(0);
  }, []);
  useEffect(() => {
    const interID = setInterval(() => {
      handleNext();
    }, 7000);
    return ()=> clearInterval(interID)
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <main>
      <div className="slidesContainer">
        {data.map((item, index) => (
          <div
            className={index === active ? "slide active" : "slide"}
            key={index}
          >
            <img src={item} alt="bg" />
          </div>
        ))}
        <BsArrowLeftShort className="arrow arrow-left" onClick={handlePrev} />
        <BsArrowRightShort className="arrow arrow-right" onClick={handleNext} />
      </div>
    </main>
  );

  //  <div className="homePageDiv">
  //           <h2>
  //             Welcome To{" "}
  //             <span className="restaurantName">
  //               <b>LEZZET</b>{" "}
  //             </span>
  //             Restaurant
  //           </h2>
  //           <h3>Enjoy the unforgettable taste</h3>
  //           {window.location.pathname === "/home" ? (
  //             <Link className="homePageLink" to={"/#menuCategories"}>
  //               {" "}
  //               <button>Check the Menu</button>{" "}
  //             </Link>
  //           ) : (
  //             <a
  //               className="homePageLink"
  //               id="categoriesType"
  //               href={`#menuCategories`}
  //             >
  //               <button>Check the Menu</button>{" "}
  //             </a>
  //           )}
  //         </div>
  //         <div>
  //           <img
  //             className="homePageImage"
  //             alt="404 - QR Code doesn`t work "
  //             src={menuLogo}
  //           />
  //         </div>
};
export default HomePage;
