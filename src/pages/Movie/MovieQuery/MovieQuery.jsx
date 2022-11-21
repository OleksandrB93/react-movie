import React, { useState, useEffect } from "react";
import { useSearchParams } from "react-router-dom";
import { searchMovie } from "api/api";
import { FaSearch } from "react-icons/fa";
import {
  SearchIconBtn,
  Input,
  Form,
  BtnContainer,
  SkeltonBox,
} from "./MovieQuery.styled";
import MovieGallery from "../MovieGallery/MovieGallery";
import SkeletonHome from "components/Skeleton/Skeleton";
import NoMovie from "./NoMovie/NoMovie";

export default function Movie() {
  const [query, setQuery] = useState("");
  const [movies, setMovies] = useState([]);
  const [searchParams, setSearchParams] = useSearchParams();
  const [isLoading, setIsLoading] = useState(false);

  const movieSearch = searchParams.get("query");

  const handleChange = e => {
    setQuery(e.currentTarget.value.toLowerCase());
  };
  const onFormSubmit = (e) => {
    e.preventDefault();

    setSearchParams({ query: query });
    setQuery("");
  };

  useEffect(() => {
    if (!movieSearch) return;

    async function renderSearchMovies() {
      try {
        setIsLoading(true);
        const moviesResp = await searchMovie(movieSearch);
        setMovies(moviesResp);
      } catch (error) {
        console.log("Ooops, something went wrong");
      } finally {
        setIsLoading(false);
      }
    }
    renderSearchMovies();
  }, [movieSearch]);

  return (
    <div>
      <Form action="" onSubmit={onFormSubmit}>
        <label htmlFor="">
          <Input type="text" name="query" value={query} onChange={handleChange} />
        </label>
        <SearchIconBtn type="submit">
          <BtnContainer>
            <FaSearch size={35} />
          </BtnContainer>
        </SearchIconBtn>
      </Form>

      {isLoading ? (
        <SkeltonBox>
          {[...new Array(20)].map((_, index) => (
            <SkeletonHome key={index} />
          ))}
        </SkeltonBox>
      ) : (
        movies && <MovieGallery movies={movies} />
      )}
      { movies.length > 0 && <NoMovie />}
    </div>
  );
}



