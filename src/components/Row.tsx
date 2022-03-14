import React, { useEffect, useState } from "react";
import { http } from "../shared/HttpUtility";
import { urlType } from "../Requests";
import { Movie, ResponseMovieData } from "../shared/ICommonMovie";
import './Row.css'

export interface IRowProps {
  title: string;
  fetchUrl: urlType;
  isLargeRow?: boolean;
  cachedData?: any;
}

const Row: React.FC<IRowProps> = ({ title, fetchUrl, isLargeRow }) => {
  const [movies, setMovies] = useState<Movie[]>([]);

  const base_url = "https://image.tmdb.org/t/p/original/";

  useEffect(() => {
    async function fetchData() {
      const request = await http<ResponseMovieData>(fetchUrl);
      if (request.parsedBody) {
        setMovies(request.parsedBody.results);
      }
      return request;
    }

    fetchData();
  }, [fetchUrl]);

  return (
    <div className="row">
      <h2>{title}</h2>

      <div className="row__posters">
        {movies.map(
          (movie) =>
            ((isLargeRow && movie.poster_path) ||
              (!isLargeRow && movie.backdrop_path)) && (
              <img
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                key={movie.id}
                src={`${base_url}${
                  isLargeRow ? movie.poster_path : movie.backdrop_path
                }`}
                alt={movie.name}
              />
            )
        )}
      </div>
    </div>
  );
};

export default Row;
