import React from "react";
import './Banner.css'
import { faClock ,faClosedCaptioning} from "@fortawesome/free-regular-svg-icons";
import { faCircle,faPlay } from "@fortawesome/free-solid-svg-icons";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";


const Banner = () => {
  return <div className="banner"style={{
    backgroundSize: "cover",
    backgroundImage: `url("https://cdn.vox-cdn.com/thumbor/sRl-1JpnLQXnzKcagKPp7Q88TdY=/0x822:1500x1684/1200x800/filters:focal(630x1237:870x1477)/cdn.vox-cdn.com/uploads/chorus_image/image/55661103/ST2_Vertical_Main_PRE_US.0.jpg")`,
  backgroundPosition: "center center",

  }}>
      <div className="banner__contents">
        {/* <img className="movie__banner" src="https://static-prod.adweek.com/wp-content/uploads/2019/05/Billelis_Lionsgate_John_Wick_3_Parabellum_Illustration_Official.jpg" alt="" /> */}
        <div className="movie__contents">
          <h1>Stranger Things</h1>
          <p className="description">Interstellar reunion is a 2017 British-American second epic science fiction ksnsljk/dnsjksdjshjdjhd
           </p>

           <div style={{
             display:"flex",
             justifyContent: "space-between",
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
           {/* <p style={{
             fontSize: "20px",
            cursor: "pointer"
           }}>Read more</p> */}
           </div>
        </div>
      </div>
      <div className="banner--fadeBottom"/>
  </div>;
};

export default Banner;
