import React from "react";
import ContentLoader from "react-content-loader";
const SkeletonHome = () => (
  <div>
    <ContentLoader
      className="skeletonHome"
      speed={1}
      width={250}
      height={375}
      viewBox="0 0 250 375"
      backgroundColor="#44577b"
      foregroundColor="#1c2434"
    >
      <rect x="0" y="0" rx="6" ry="6" width="250" height="375" />
      <rect x="89" y="165" rx="0" ry="0" width="1" height="1" />
    </ContentLoader>
  </div>
);

export default SkeletonHome;


