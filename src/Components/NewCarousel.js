import React, { useState } from "react";
import "./NewCarousel.css";

const NewCarousel = () => {
  const [count, setCount] = useState(0);
  const [dev, setDev] = useState([1, 2, 3]);
  console.log({ dev });
  const handelcarouselr = () => {
    setCount(count + 1);
    setDev((old) => [
      ...old, old[count],
    ]);
  };
  const handelcarousell = () => {
    setCount(count - 1);
    setDev((old) => [...old, old[0]]);
  };
  return (
    <div className="baba">
      <div className="carwrapper">
        <div className="con">
          {dev.map((item, index) => (
            <div
              className="red"
              key={index}
              style={{
                marginLeft: `${index > 0 ? 20: -100}px`,
                // margin:'0 10px 0 -120px',
                transform: count && `translateX(-140px)`,
                transition: "all 2s linear",
              }}
            >
              {item}
            </div>
          ))}
        </div>

        <button onClick={handelcarousell}>L</button>
        <button onClick={handelcarouselr}>R</button>
      </div>
    </div>
  );
};

export default NewCarousel;
