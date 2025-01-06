import React from "react";
import "./built.css";
import aiImage from "../Assests/ai_desktop.webp"; // Replace with the actual path to your AI image
import searchImage from "../Assests/search-front_desktop.webp"; // Replace with the actual path to your search image
import workspaceImage from "../Assests/workspace-2.png"; // Replace with the actual path to your workspace image
import gmail from "../Assests/gmail.jpeg"
import drive from "../Assests/drive.png"

const MainPage = () => {
  return (
    <div className="main-page">
      {/* Title Section */}
      <div className="header">
        <h1>
          The browser <span className="highlight">built</span> by Google
        </h1>
      </div>

      {/* Cards Section */}
      <div className="cards">
        {/* First Card: Vertical Layout */}
        <div className="card large-card vertical-layout">
          <h4 className="card-title">GOOGLE AI</h4>
          <div className="card-content">
            <h2>Access AI superpowers while you browse.</h2>
            <p style={{color:"Black"}}>
              Google is integrating artificial intelligence to make our products
              more useful. We use AI for features like Search, Google Translate,
              and more, and are innovating new technologies responsibly.
            </p>
          </div>
          <div className="card-image">
            <img style={{width:"900px", maxWidth: "none", marginLeft:"-750px",marginTop:"-164px"}} src={aiImage} alt="Google AI" />
          </div>
        </div>

        {/* Bottom Two Cards */}
        <div className="small-cards">
          {/* Second Card */}
          <div className="card2 small-card" style={{backgroundColor:"#fde293"}}>
            <div className="card-content2">
              <h4 className="card-title">GOOGLE SEARCH</h4>
              <h2>The search bar you love, built right in.</h2>
              <img src={searchImage} alt="Google Search" className="search" />
            </div>
          </div>

          {/* Third Card */}
          <div className="card2 small-card" style={{backgroundColor:"White",width:"600px",height:"430px"}}>
            <div className="card-content2">
              <h4 className="card-title">GOOGLE WORKSPACE</h4>
              <h2>Get things done, with or without Wi-Fi.</h2>
              <div className="apps">
              <img src={workspaceImage} alt="Google Workspace" className="word" />
              <img src={gmail} alt="" className="word"/>
              <img src={drive} alt="" className="word"/>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default MainPage;
