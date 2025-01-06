import React, { useEffect, useRef } from "react";
import "./MainSection.css";
import chrome from "../Assests/Google_Chrome_icon_(February_2022).svg.png";
import image1 from "../Assests/chrome-gallery-1.webp"
import image2 from "../Assests/chrome-gallery-2.webp";
import image3 from "../Assests/chrome-gallery-3.webp";
import image4 from "../Assests/chrome-gallery-4.webp";
import image5 from "../Assests/chrome-gallery-5.webp";

const MainSection = () => {
  const galleryRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      const scrollPosition = window.scrollY;

      // Move the entire gallery horizontally
      if (galleryRef.current) {
        galleryRef.current.style.transform = `translateX(${scrollPosition * 0.5}px)`;
      }
    };

    window.addEventListener("scroll", handleScroll);

    // Cleanup event listener
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <div>
      <main className="main-section">
        <img className="chrome-logo" src={chrome} alt="Chrome Logo" />
        <h1 className="headline">The browser built to be yours</h1>
        <button className="download-btn">Download Chrome</button>
        <p className="update-link">I want to update Chrome</p>
        <p className="windows">For Windows 11/10 64-bit</p>
        <p className="subtext">
          <input type="checkbox" id="data-sharing" />
          <label htmlFor="data-sharing">
            Help make Google Chrome better by automatically sending usage
            statistics and crash reports to Google.{" "}
            <a href=".">Learn more</a>
          </label>
        </p>
        <p className="terms">
          By downloading Chrome, you agree to the Google Terms of Service and
          Chrome and ChromeOS Additional Terms of Service.
        </p>
      </main>
      <section className="image-gallery" ref={galleryRef}>
        <img src={image1} alt="s 1" />
        <img src={image2} alt="Screenshot 1" />
        <img src={image3} alt="Screenshot 2" />
        <img src={image4} alt="Screenshot 3" />
        <img src={image5} alt="Screenshot 4" />
      </section>
    </div>
  );
};

export default MainSection;
