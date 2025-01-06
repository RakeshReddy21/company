import React, { useEffect, useState } from "react";
import image1 from "../Assests/Untitled.png";
import image2 from "../Assests/autofill.webp";
import image3 from "../Assests/chrome-gallery-5.webp";
import "./Yours.css";

const Yours = () => {
    const [scale, setScale] = useState(1);

    useEffect(() => {
      const handleScroll = () => {
        // Increase the scale factor based on scroll position
        const newScale = (1 + window.scrollY / 1000) / 1.5;
        setScale(newScale);
      };
  
      window.addEventListener("scroll", handleScroll);
  
      return () => {
        window.removeEventListener("scroll", handleScroll);
      };
    }, []);

  return (
    <div className="Yours-section">
      <div className="Yours-title">
        <h1>Make it yours and take it with you</h1>
      </div>
      <div className="Yours-content">
        <img
          src={image1}
          alt=""
          className="chrome"
          style={{
            transform: `scale(${scale})`,
            transition: "transform 0.1s linear", // Smooth scaling
          }}
        />
      </div>
      <div className="contents">
        <div>
            <img src={image2} alt="" className="firefox" ClassName="firefox"/>
        </div>
        <div className="buttons">
            <button>Cutomize Your Chrome</button>
            <button>Browse across devices</button>
            <button>Save time with autofill</button>
        </div>
      </div>
      <div className="contents2">
      <div className="exp">
        <h1>Extend your experience</h1>
        <p>From shopping and entertainment to productivity, <br/>find extensions to improve your experience in the <br /> Chrome Web Store.</p>
      </div>
      <div className="imgtag">
        <img src={image3} alt="" className="chrome" />
      </div>
      </div>
    </div>
  );
};

export default Yours;