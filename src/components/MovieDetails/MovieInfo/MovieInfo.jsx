import React from 'react';
import { URL_POSTER, LOGO_URL } from 'constants/constants';
import Trailer from 'components/Trailer/Trailer';
import { GiFilmSpool } from 'react-icons/gi';
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
  LogoContainer,
  LogoItem,
} from './MovieInfo.styled';

export default function MovieInfo({ info }) {
  const {
    poster_path,
    original_title,
    release_date,
    vote_average,
    overview,
    genres,
    production_companies,
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
        <LogoContainer>
          {production_companies.map(({ logo_path, id }) => (
            <LogoItem key={id}>
              {logo_path ? (
                <img src={`${LOGO_URL}${logo_path}`} alt="logo" />
              ) : (
                <GiFilmSpool size={65} />
              )}
            </LogoItem>
          ))}
        </LogoContainer>
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
