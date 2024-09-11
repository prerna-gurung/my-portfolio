
import React from "react";

import About from "./Components/About";
import Footer from "./Components/Footer";
import Header from "./Components/Header";
import Home from "./Components/Home";
import Portfolio from "./Components/Portfolio";

import "./index.css";

const siteProps = {
  name: "Prerna Gurung",
  title: "Web Developer",
  email: "prerna.gurung421@gmail.com",
  gitHub: "/prerna-gurung",
  linkedIn: "/prerna-gurung-608a41256",
  twitter: "#",
  youTube: "#",
};

const primaryColor = "#4E567E";

const App = () => {
  return (
    <div id="main">
      <Header />
      <Home name={siteProps.name} title={siteProps.title} />
      <About />
      <Portfolio />
      <Footer {...siteProps} primaryColor={primaryColor} />
    </div>
  );
};

export default App;
