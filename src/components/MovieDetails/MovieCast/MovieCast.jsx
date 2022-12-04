import React, { useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import { getMovieCast } from "api/api";
import { URL_POSTER } from "constants/constants";
import { MovieCastBox, CastItem, CastInfo } from "./MovieCast.styled";
import { Loader } from "components/Loader/Loader";

export default function MovieCast() {
  const [cast, setCast] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieId() {
      try {
        setIsLoading(true);
        const idResp = await getMovieCast(movieId);
        setCast(idResp);
      } catch (error) {
        console.log(error);
      } finally {
        setTimeout(() => {
          setIsLoading(false)
        }, 1000)

      }
    }
    getMovieId();
  }, [movieId]);

  if (cast.length === 0) {
    return "We don't have any cast information on this movie.";
  }

  return (
    <MovieCastBox>
      {isLoading ? (
        <Loader />
      ) : (
        cast.map(({ profile_path, name, character, id }) => {
          return (
            <CastItem key={id}>
              <img
                src={
                  profile_path
                    ? `${URL_POSTER}${profile_path}`
                    : "https://banffventureforum.com/wp-content/uploads/2019/08/No-Image.png"
                }
                alt=""
                width="200"
              />
              <CastInfo>
                <p>{name}</p>
                <p>Character: {character}</p>
              </CastInfo>
            </CastItem>
          );
        })
      )}
    </MovieCastBox>
  );
}
