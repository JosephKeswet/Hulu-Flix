import React from "react";
import './Banner.css'
import { faClock ,faClosedCaptioning} from "@fortawesome/free-regular-svg-icons";
import { faCircle,faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { useState } from "react";
import { useEffect } from "react";


const Banner = ({backdrop_path}) => {
  const [movie,setMovie] = useState([])
  const IMG_API = "https://image.tmdb.org/t/p/original";

  useEffect(() =>{
    fetch("https://api.themoviedb.org/3/movie/top_rated?api_key=aeb882da259154a084d8a04be9e5462f&language=en-US&page=1")
    .then((res) => (
      res.json()
    ))
    .then((data) => {
      console.log(data);
      setMovie(data.results[
        Math.floor(Math.random() * data.results.length - 1)
      ])
    } )
  }, []);

  const truncate = (string,n) => {
    return string?.length > n ? string.substr(0,n - 1) + '...' : string
}


  return <div className="banner"style={{
    backgroundSize: "cover",
    paddingTop: "10rem",
    backgroundImage: `url("https://image.tmdb.org/t/p/original/${movie?.backdrop_path}")`,
  backgroundPosition: "center center",

  }}>
      <div className="banner__contents">
    
        <div className="movie__contents">
          <h1>{movie?.name || movie?.title}</h1>
          <p className="description">  {truncate(`${movie?.overview}`, 150)}
           </p>

           <div style={{
             display:"flex",
            //  justifyContent: "space-between",
            gap: 10,
             marginBottom: "1rem",
             maxWidth: "30rem",
             fontWeight:"bolder"
           }}>
             <p><FontAwesomeIcon icon={faClock}/>164 min</p>
             <p> <FontAwesomeIcon icon={faClosedCaptioning}/> Subtitles</p>
             <p> <FontAwesomeIcon style={{color:"red"}} icon={faCircle}/> Imdb 9.1/10</p>
           </div>
           <div style={{
             display: "flex",
             alignItems: "center"
           }}>
           <button className="trailerButton"> <FontAwesomeIcon style={{color: "red"}} icon={faPlay}/> Watch trailer</button>
           </div>
        </div>
      </div>
      <div className="banner--fadeBottom"/>
  </div>;
};

export default Banner;
