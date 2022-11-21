import React from "react";
import { useState, useEffect } from "react";
import { useParams } from "react-router-dom";
import { getMovieReviews } from "api/api";
import { ReviewsItem, AuthorP, ReviewsContent } from "./MovieReviews.styled";
import { Loader } from "components/Loader/Loader";
import NoReviews from "./NoReviews/NoReviews";

export default function MovieReviews() {
  const [reviews, setReviews] = useState([]);
  const { movieId } = useParams();
  const [isLoading, setIsLoading] = useState(false);

  useEffect(() => {
    async function getMovieId() {
      try {
        setIsLoading(true);
        const idResp = await getMovieReviews(movieId);
        setReviews(idResp);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false)
      }
    }
    getMovieId();
  }, [movieId]);

  return (
    <>
      {reviews.length === 0 ? (
        <NoReviews />
      ) : (
        <ul>
          {isLoading ? (
            <Loader />
          ) : (
            reviews.map(({ id, author, content }) => (
              <ReviewsItem key={id}>
                <AuthorP>Author: {author}</AuthorP>
                <ReviewsContent>{content}</ReviewsContent>
              </ReviewsItem>
            ))
          )}
        </ul>
      )}
    </>
  );
}
