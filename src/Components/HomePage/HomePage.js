import "./HomePage.css";
import bg1 from "../../Images/bg1.jpg";
import bg2 from "../../Images/bg2.jpg";
import bg3 from "../../Images/bg3.jpg";
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
};
export default HomePage;
