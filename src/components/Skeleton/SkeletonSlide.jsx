import React from "react";
import ContentLoader from "react-content-loader";

const SkeletonSlide = (props) => (
  <div>
    <ContentLoader
    className="skeletonSlide swiper-slide "
      speed={1}
      width={159}
      height={225}
      viewBox="0 0 159 225"
      backgroundColor="#44577b"
      foregroundColor="#1c2434"
      {...props}
    >
      <rect x="0" y="0" rx="6" ry="6" width="159" height="225" />
      <rect x="89" y="165" rx="0" ry="0" width="1" height="1" />
    </ContentLoader>
  </div>
);

export default SkeletonSlide;
