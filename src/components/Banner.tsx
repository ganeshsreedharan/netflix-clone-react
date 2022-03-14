import React, { useEffect, useState } from "react";
import { http } from "../shared/HttpUtility";
import { imageRequests } from "../Requests";
import './Banner.css'
import { Movie, ResponseMovieData } from "../shared/ICommonMovie";

const Banner: React.FC = () => {
  const truncate = (input?: string, n:number = 100): string => {
      if(!input){
        return "New Movie"
      }
    return input?.length > n ? input.slice(0, n - 1) + "..." : input;
  }

  const [movie, setMovie] = useState<Movie>();

  useEffect(() => {
    async function fetchData() {
      const movieResponse= await http<ResponseMovieData>(imageRequests.fetchNetflixOriginals);
      const results = movieResponse.parsedBody?.results;
      if(results && results.length > 0){
          setMovie(results[
            Math.floor(Math.random() * results.length - 1)
          ])
      }
    }
    fetchData();
  }, []);
  return (
    <header
      className="banner"
      style={{
        backgroundSize: "cover",
        backgroundImage: `url("https://image.tmdb.org/t/p/original${movie?.backdrop_path}")`,
        backgroundPosition: "center center",
      }}
    >
      <div className="banner__contents">
        <h1 className="banner__title">
          {movie?.title || movie?.name || movie?.original_name}
        </h1>
        <div className="banner__buttons">
          <button className="banner__button">Play</button>
          <button className="banner__button">My List</button>
        </div>
        <h1 className="banner__description">
          {truncate(movie?.overview, 250)}
        </h1>
      </div>

      <div className="banner--fadeBottom" />
    </header>
  );
};

export default Banner;
