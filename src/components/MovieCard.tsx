import React from "react";

interface Movie {
  _id: string;
  title: string;
  poster: string;
  plot: string;
}

interface MovieCardProps {
  key: number;
  item: Movie;
}

export const MovieCard = ({ item, key }: MovieCardProps) => {
  return (
    <div className="flex-1 w-64">
      <img src={item.poster} alt={item.title} width="400" height={"250"} />
      <h1>{item.title}</h1>
    </div>
  );
};
