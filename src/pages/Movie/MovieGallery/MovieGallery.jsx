import React from 'react';
import { motion } from 'framer-motion';
import { useLocation, NavLink } from 'react-router-dom';
import { URL_POSTER } from 'constants/constants';
import SkeletonHome from 'components/Skeleton/Skeleton';
import {
  MovieList,
  MovieItem,
  MovieImg,
  MovieTitle,
} from './MovieGallery.styled';

export default function MovieGallery({ movies, isLoading }) {
  const location = useLocation();

  const listVAriatns = {
    visible: i => ({
      opacity: 1,
      y: 0,
      transition: {
        delay: i * 0.1,
      },
    }),
    hidden: { opacity: 0, y: 100 },
  };

  return (
    <MovieList>
      {isLoading
        ? [...new Array(20)].map((_, index) => <SkeletonHome key={index} />)
        : movies.map(({ id, original_title, poster_path, title }, i) => (
            <motion.div
              key={id}
              variants={listVAriatns}
              initial="hidden"
              animate="visible"
              custom={i}
            >
              <MovieItem>
                <NavLink to={`/movies/${id}`} state={{ from: location }}>
                  <MovieImg
                    src={
                      poster_path ? `${URL_POSTER}${poster_path}` : `no image`
                    }
                    alt={title}
                    width={350}
                    height={525}
                  />
                  <div>
                    <MovieTitle>{original_title}</MovieTitle>
                  </div>
                </NavLink>
              </MovieItem>
            </motion.div>
          ))}
    </MovieList>
  );
}
