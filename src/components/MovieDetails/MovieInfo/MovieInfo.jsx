import React from 'react';
import { URL_POSTER } from 'constants/constants';
import {
  MovieInfoBox,
  Poster,
  Title,
  Score,
  OverviewTitle,
  OverviewContent,
  GenresTitle,
  GenresContent,
  PlayBtnContainer,
  PosterandBtnContainer,
} from './MovieInfo.styled';
import Trailer from 'components/Trailer/Trailer';

export default function MovieInfo({ info }) {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
  } = info;

  const getYear = () => new Date(`${release_date}`).getFullYear();
  const getScore = () => Math.round(`${vote_average}` * 10);

  return (
    <MovieInfoBox backdrop={info}>
      <PosterandBtnContainer>
        <Poster
          src={poster_path ? `${URL_POSTER}${poster_path}` : 'no image'}
          alt={original_title}
          width="300"
          height="450"
        />
        <PlayBtnContainer>
          <Trailer />
        </PlayBtnContainer>
      </PosterandBtnContainer>
      <div>
        <Title>
          {original_title} ({getYear()})
        </Title>
        <Score>Use Score : {getScore()}%</Score>
        <OverviewTitle>Overview:</OverviewTitle>
        <OverviewContent>{overview}</OverviewContent>
        <GenresTitle>Genres:</GenresTitle>
        <GenresContent>
          {genres.map(genre => genre.name).join(', ')}
        </GenresContent>
      </div>
    </MovieInfoBox>
  );
}
