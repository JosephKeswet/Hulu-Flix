import React from "react";
import Banner from "./Banner";
import BottomNav from "./BottomNav";
import Cards from "./Cards";
import Nav from "./Nav";

const Homescreen = () => {
  return <div style={{
    backgroundColor: "#121212",
  }}>
        <Nav/>
        <Banner/>
        <BottomNav/>
        <Cards/>

  </div>;
};

export default Homescreen;
