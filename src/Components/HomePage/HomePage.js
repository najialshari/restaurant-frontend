import "./HomePage.css";
import { carousel } from "./images";
import { BsArrowLeftShort, BsArrowRightShort } from "react-icons/bs";
import { useEffect, useState } from "react";

const HomePage = () => {
  const data = carousel;
  const [active, setActive] = useState(0);
  const [start, setStart] = useState(true);
  const [direction, setDirection] = useState("right");
  const [old, setOld] = useState();

  const handleNext = () => {
    setActive(active === data.length - 1 ? 0 : active + 1);
    setDirection("right")
    setOld(active);
  };
  const handlePrev = () => {
    setActive(active === 0 ? data.length - 1 : active - 1);
    setOld(active);
    setDirection("left")
  };
  useEffect(() => {
    const interID = setInterval(() => {
      handleNext();
      setStart(false);
    }, 8000);
    return () => clearInterval(interID);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [active]);

  return (
    <main>
      <div className="slidesContainer">
        {data.map((item, index) => (
          <div
            className={index === active ? "slide active" : "slide"}
            key={index}
            style={
              !start
                ? direction === "right"
                  ? index === active
                    ? { animation: "flashRight 3s ease" }
                    : index === old
                    ? { animation: "flashRightOut 1s ease" }
                    : null
                  : index === active
                  ? { animation: "flashLeft 3s ease" }
                  : index === old
                  ? { animation: "flashLeftOut 1s ease" }
                  : null
                : {}
            }
          >
            <div>
              <img src={item.src} alt="bg" />
            </div>
            <div>
              <h1>{item.text}</h1>
            </div>
          </div>
        ))}
        <BsArrowLeftShort className="arrow arrow-left" onClick={handlePrev} />
        <BsArrowRightShort className="arrow arrow-right" onClick={handleNext} />
      </div>
    </main>
  );
};
export default HomePage;
