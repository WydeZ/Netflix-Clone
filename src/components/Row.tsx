import React, { useEffect, useState } from "react";
import instance from "../axios";

interface RowProps {
  title: string;
  fetchUrl: string;
  isLarge?: boolean;
  setPopup: any
}

export const Row: React.FC<RowProps> = ({ title, fetchUrl, isLarge, setPopup }) => {
  const [movies, setMovies] = useState([]);
  const imageUrl = "https://image.tmdb.org/t/p/w500";

  useEffect(() => {
    async function fetchData() {
      const request = await instance.get(fetchUrl);
      setMovies(request.data.results);
      return request;
    }
    fetchData();
  }, [fetchUrl]);

  return (
    <div className="Row">
      <h2 className="Row_title">{title}</h2>
      <div className="Row_posters">
        {movies.map((movie: any) => {
          return (
            <img
              key={movie.poster_path + Date.now()}
              className={`Row_poster ${isLarge && "Row_poster-large"}`}
              src={`${imageUrl}${
                isLarge ? movie?.poster_path : movie?.backdrop_path
              }`}
              alt={movie.title}
              onClick={() => setPopup(movie)}
            ></img>
          );
        })}
      </div>
    </div>
  );
};
