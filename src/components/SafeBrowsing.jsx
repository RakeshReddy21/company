import React from "react";
import "./SafeBrowsing.css";
import safe from "../Assests/safe.png";
import secure from "../Assests/secure.png";

const SafeBrowsing = () => {
  return (
    <div>
      <div className="title">
          <h1 className="stay">
            Stay <span className="safe-badge">safe</span> <br /> while you
            browse
          </h1>
      </div>
      <div className="safe-browsing">
        <div className="cards-container">
          <div className="card" style={{ width: "300px" }}>
            <h3>Password Manager</h3>
            <h2>Use strong passwords on every site.</h2>
            <img src={safe} alt="safe" />
            <div className="forbtn">
              <span className="button">+</span>
            </div>
          </div>
          <div
            className="card light"
            style={{ width: "300px", marginLeft: "-0px" }}
          >
            <h3 style={{ color: "#8f8b89" }}>Safety Check</h3>
            <h1 className="cardlight">
              Check your safety level in real time with just one click.
            </h1>
            <div className="forbtn">
              <span className="button2">+</span>
            </div>
          </div>
          <div className="card light" style={{ width: "300px" }}>
            <h3 style={{ color: "#8f8b89" }}>Enhanced Safe Browsing</h3>
            <h1 className="cardlight2" style={{marginTop:"-120px"}}>
              Browse with the confidence that you're staying safer online.
            </h1>
            <div className="forbtn">
              <span className="button2">+</span>
            </div>
          </div>
          <div className="card-bright" style={{ width: "300px" }}>
            <h3>Privacy Mode</h3>
            <h1>Keep your privacy under control with easy-to-use settings.</h1>
            <img src={secure} alt="secure" />
            <div className="forbtn">
              <span className="button">+</span>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SafeBrowsing;
