import React, { useState, useEffect } from "react";
import { fetchTrendMovie } from "api/api";
import MovieGallery from "pages/Movie/MovieGallery/MovieGallery";
import { HomeTitle } from "./Home.styled";

import { SwiperHome } from "components/Swiper/Swiper";

export default function Home() {
  const [trendMovie, setTrendMovie] = useState([]);
  const [isLoading, setIsLoading] = useState(true);

  useEffect(() => {
    const renderTrendMovies = async () => {
      try {
        const trendMovies = await fetchTrendMovie();
        setTrendMovie(trendMovies);
      } catch (error) {
        console.log(error);
      } finally {
        setIsLoading(false);
      }
    };
    renderTrendMovies();
  }, []);
  return (
    <div>
      <SwiperHome isLoading={isLoading} movies={trendMovie} />
      <HomeTitle>Trending movies today:</HomeTitle>
      {<MovieGallery isLoading={isLoading} movies={trendMovie} />}
    </div>
  );
}

