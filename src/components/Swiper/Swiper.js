import SwiperCore, {
  EffectCoverflow,
  Pagination,
  Autoplay,
  Virtual,
  Manipulation,
} from 'swiper';
import { Swiper, SwiperSlide } from 'swiper/react';
import 'swiper/swiper-bundle.min.css';
import 'swiper/swiper.min.css';
import { URL_POSTER } from 'constants/constants';
import { useLocation } from 'react-router-dom';
import SkeletonSlide from '../Skeleton/SkeletonSlide';
import {
  SwiperContainer,
  Slide,
  // SkeletonSlideContainer,
  SlideImg,
  SliderTitle,
} from './Swiper.styled';


SwiperCore.use([EffectCoverflow, Pagination, Autoplay, Manipulation, Virtual]);

export const SwiperHome = ({ isLoading, movies }) => {
  const location = useLocation();

  return (
    <>
      {
        <SwiperContainer>
          <Swiper
            initialSlide={'3'}
            spaceBetween={10}
            slidesPerView={8}
            grabCursor={true}
            centeredSlides={true}
            loop={true}
            autoplay={{
              delay: 1000,
              disableOnInteraction: false,
              pauseOnMouseEnter: true,
            }}
            speed={1000}
            lazy={true}
            // effect={"coverflow"}
            // coverflowEffect={{
            //   rotate: 5,
            //   stretch: 0,
            //   depth: 50,
            //   slideShadows: false,
            // }}
            className="mySwiper"
          >
            {movies.map(({ id, poster_path, title }) => (
              <SwiperSlide key={id}>
                <Slide to={`/movies/${id}`} state={{ from: location }}>
                  {isLoading ? (
                    <SkeletonSlide />
                  ) : (
                    <SlideImg
                      src={
                        poster_path ? `${URL_POSTER}${poster_path}` : `no image`
                      }
                      alt={title}
                      width={150}
                      height={225}
                    />
                  )}
                  <SliderTitle>{title}</SliderTitle>
                </Slide>
              </SwiperSlide>
            ))}
          </Swiper>
        </SwiperContainer>
      }
    </>
  );
};
// 1 ? (
//   <SkeletonSlideContainer className="mySwiper">
//     {[...new Array(20)].map((_, index) => (
//       <SkeletonSlide key={index} />
//     ))}
//   </SkeletonSlideContainer>
// ) :
