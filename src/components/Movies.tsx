import axios from "axios";
import React, { useEffect, useState } from "react";
import { MovieCard } from "./MovieCard";

interface Movie {
  _id: string;
  title: string;
  poster: string;
  plot: string;
}

export const Movies = () => {
  const [movies, setMovies] = useState<Array<Movie>>([]);
  useEffect(() => {
    getData();
  }, []);

  const getData = () => {
    axios
      .get("http://localhost:9000/api/movie")
      .then((res) => {
        setMovies(res.data.result);
      })
      .catch((err) => console.log(err));
  };

  return (
    <div>
      <h2>Movies</h2>
      <div className="flex flex-row flex-wrap">
        {movies.map((item, index) => {
          return <MovieCard key={index} item={item} />;
        })}
      </div>
    </div>
  );
};
