import React from "react";
import { useEffect } from "react";
import { useState } from "react";
import './Cards.css'

const Cards = ({title,poster_path,id}) => {
 const IMG_API = "https://image.tmdb.org/t/p/original";
// const IMG_API = "https://image.tmdb.org.t.p.w1280";

  return <div>
      <div className="movie__posters">
          <div>
      <img src={IMG_API + poster_path} alt="" />
      <h1>{title}</h1>
      </div>
    
      </div>
    
  </div>;
};

export default Cards;
