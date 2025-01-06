import React from "react";
import "./UpdatesSection.css";
import chromeIcon from "../Assests/Google_Chrome_icon_(February_2022).svg.png"; // Adjust path as needed
import updatesImage from "../Assests/updates.png"; // Replace with actual image path

const UpdatesSection = () => {
  return (
    <section className="updates-section">
      <div className="updates-title">
        <h1>Discover the latest</h1>
        <div className="updates-icon">
          <img src={chromeIcon} alt="Chrome Icon" className="chrome"/>
          <span>updates</span>
        </div>
        <h1>from Chrome</h1>
      </div>
      <div className="updates-cards">
        {/* Card 1 */}
        <div className="update-card card-blue">
          <h3 className="card-category">UPDATES</h3>
          <h2 className="card-title">Automatic updates</h2>
          <p className="card-description">
            There's a new Chrome release every four weeks, making it easy to
            have the newest features and a faster, safer web browser.
          </p>
          <a href="." className="card-link">
            Learn about automatic updates
          </a>
          <img className="card-image1" src={updatesImage} alt="Automatic updates" />
        </div>
        {/* Card 2 */}
        <div className="update-card card-yellow">
          <h3 className="card-category">LATEST</h3>
          <h2 className="card-title">New from Chrome</h2>
          <p className="card-description">
            Chrome regularly updates with tools and features that make it
            faster and easier to use.
          </p>
          <a href="." className="card-link">
            Learn what's new on Chrome →
          </a>
          <img className="card-image" src={chromeIcon} alt="Chrome logo" />
        </div>
      </div>
    </section>
  );
};

export default UpdatesSection;
