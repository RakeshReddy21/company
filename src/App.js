import React from "react";
import Navbar from "./components/Navbar";
import MainSection from "./components/MainSection";
import "./App.css";
import UpdatesSection from "./components/UpdatesSection";
import Yours from "./components/Yours";
import Stay from "./components/SafeBrowsing";
import Fast from "./components/fast";
import Built from "./components/built";

const App = () => {
  return (
    <div className="App">
      <Navbar />
      <MainSection />
      <UpdatesSection/>
      <Yours/>
      <Stay/>
      <Fast/>
      <Built/>
    </div>
  );
};

export default App;
