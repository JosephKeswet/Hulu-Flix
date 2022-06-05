import React from "react";
import { faAngleDown,faMagnifyingGlass } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";

const BottomNav = () => {
  return <div>
      <div className="bottomNav" style={{
          display: "flex",
          justifyContent: "space-between",
          color: "white",
          padding: "1.5rem",
          fontFamily: "cursive",
          fontWeight: "bold",
          marginLeft: "2.6rem"
       

      }}>
          <div>All formats <FontAwesomeIcon icon={faAngleDown} /> </div>
          <div>By Date <FontAwesomeIcon icon={faAngleDown} /></div>
          <div>By Category <FontAwesomeIcon icon={faAngleDown} /></div>
          <div>Coming Soon</div>
          <div> <input type="text" style={{
              width: "30rem",
              border: "none",
              borderBottom: "1px solid white",
              backgroundColor: "#121212",
              outline: "none",
              fontSize: "1.3rem",
            
          }}
          placeholder={"Search by name..."}
          /> <FontAwesomeIcon icon={faMagnifyingGlass} style={{
              width: "1.5rem",
              height: "1.2rem",
              color: "white"
          }} /> </div>
      </div>
  </div>;
};

export default BottomNav;
