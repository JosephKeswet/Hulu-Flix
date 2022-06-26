import React, { useEffect, useState } from "react";
import Banner from "./Banner";
import BottomNav from "./BottomNav";
import Cards from "./Cards";
import './Cards.css';
import Nav from "./Nav";

const Homescreen = () => {
  const [movies,setMovies] = useState([])

  useEffect(()=>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=aeb882da259154a084d8a04be9e5462f&language=en-US&page=1")
    .then((res) => res.json())
    .then((dataR) => {
      // console.log(dataR)
    setMovies(dataR.results)
    })
  })
  return <div style={{
    backgroundColor: "#121212",
  }}>
        <Nav/>
        <Banner/>
        <BottomNav/>
        <div className="card__container">      {movies.map((movie) => (<Cards key={movie.id} {...movie}/>))} </div>

  </div>;
};

export default Homescreen;
