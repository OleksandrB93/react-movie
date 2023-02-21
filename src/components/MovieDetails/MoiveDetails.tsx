import React, { useEffect, useState, Suspense } from 'react';
import { useParams, useLocation, Outlet } from 'react-router-dom';
import { getMovieDetails } from 'api/api';
import { HiBackspace } from 'react-icons/hi';
import MovieInfo from './MovieInfo/MovieInfo';
import SkeletonInfo from '../Skeleton/SkeletonInfo';
import { useMediaQuery } from 'react-responsive';
import {
  MDetContainer,
  AdditionalInfo,
  CastReviewsList,
  CastReviewsItem,
  NavlinkComtainer,
  GoBack,
  BackDiv,
} from './MovieDetails.styled';

export default function MoiveDetails() {
  const [movie, setMovie] = useState(0);
  const { movieId } = useParams();
  const location = useLocation();
  const [isLoading, setIsLoading] = useState(false);

  const isMobileAndLaptop = useMediaQuery({
    query: '(min-width: 768px)',
  });

  useEffect(() => {
    async function getMovieId() {
      try {
        setIsLoading(true);
        const idResp = await getMovieDetails(movieId);
        setMovie(idResp);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => setIsLoading(false), 1000);
      }
    }
    getMovieId();
  }, [movieId]);

  const from = location.state?.from ?? '/';

  return (
    <>
      {movie && (
        <MDetContainer>
          <GoBack to={from}>
            <BackDiv isMobileAndLaptop={isMobileAndLaptop}>
              <HiBackspace size={35} />
            </BackDiv>
          </GoBack>
          {isLoading ? <SkeletonInfo /> : <MovieInfo info={movie}></MovieInfo>}
          <div>
            <AdditionalInfo> Additional information</AdditionalInfo>
            <NavlinkComtainer>
              <CastReviewsList>
                <li>
                  <CastReviewsItem to="cast" state={{ from }}>
                    Cast
                  </CastReviewsItem>
                </li>
                <li>
                  <CastReviewsItem to="reviews" state={{ from }}>
                    Reviews
                  </CastReviewsItem>
                </li>
              </CastReviewsList>
            </NavlinkComtainer>
            <Suspense fallback={<div>Loading...</div>}>
              <Outlet />
            </Suspense>
          </div>
        </MDetContainer>
      )}
    </>
  );
}
