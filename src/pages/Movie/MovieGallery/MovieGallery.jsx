import React from "react";
import { useLocation, NavLink } from "react-router-dom";
import { URL_POSTER } from "constants/constants";
import SkeletonHome from "components/Skeleton/Skeleton";

import {
  MovieList,
  MovieItem,
  MovieImg,
  MovieTitle,
} from "./MovieGallery.styled";

export default function MovieGallery({ movies, isLoading }) {
  const location = useLocation();

  return (
    <MovieList>
      {isLoading
        ? [...new Array(20)].map((_, index) => <SkeletonHome key={index} />)
        : movies.map(({ id, original_title, poster_path, title }) => (
            <MovieItem key={id}>
              <NavLink to={`/movies/${id}`} state={{ from: location }}>
                <MovieImg
                  src={poster_path ? `${URL_POSTER}${poster_path}` : `no image`}
                  alt={title}
                  width={350}
                  height={525}
                />
                <div>
                  <MovieTitle>{original_title}</MovieTitle>
                </div>
              </NavLink>
            </MovieItem>
          ))}
    </MovieList>
  );
}

