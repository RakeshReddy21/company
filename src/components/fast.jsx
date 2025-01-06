import React, { useState } from "react";
import "./fast.css";
import image from "../Assests/browser.png";
import image1 from "../Assests/tabs-groups_desktop.webp";
import image2 from "../Assests/devices_desktop.webp";

const Fast = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  const handlePrev = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 0 ? 2 : prevIndex - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prevIndex) => (prevIndex === 2 ? 0 : prevIndex + 1));
  };

  return (
    <div className="fast">
      <div className="fast-title">
        <h1>
          The Fast way to do <br /> things online.
        </h1>
      </div>
      <div className="carousel">
        <button className="nav-btn prev-btn" onClick={handlePrev}>
          ❮
        </button>

        {/* Card 1 */}
        {currentIndex === 0 && (
          <div className="contents card-performance">
            <div className="text-container">
              <h1>Prioritise performance</h1>
              <h4>
                Chrome is built for performance. Optimise your experience with
                features like Energy Saver and Memory Saver.
              </h4>
            </div>
            <div className="carousel-image image-performance">
              <img src={image} alt="Performance" className="image1" />
            </div>
          </div>
        )}

        {/* Card 2 */}
        {currentIndex === 1 && (
          <div className="contents card-tabs">
            <div className="text-container">
              <h1>Stay on top of tabs</h1>
              <h4>
                Chrome has tools to help you manage tabs. Group, label, and
                colour-code tabs to stay organised and work faster.
              </h4>
            </div>
            <div className="carousel-image image-tabs">
              <img src={image1} alt="Tabs" />
            </div>
          </div>
        )}

        {/* Card 3 */}
        {currentIndex === 2 && (
          <div className="contents card-device">
            <div className="text-container">
              <h1>Optimised for your device</h1>
              <h4>
                Chrome works seamlessly with your device across platforms for a
                smooth experience.
              </h4>
            </div>
            <div className="carousel-image image-device">
              <img src={image2} alt="Device" />
            </div>
          </div>
        )}

        <button className="nav-btn next-btn" onClick={handleNext}>
          ❯
        </button>
      </div>
    </div>
  );
};

export default Fast;
