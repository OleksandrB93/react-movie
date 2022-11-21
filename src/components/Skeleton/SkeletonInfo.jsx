import React from "react"
import ContentLoader from "react-content-loader"

const SkeletonInfo = (props) => (
    <ContentLoader 
      speed={1}
      width={1300}
      height={900}
      viewBox="0 0 1300 900"
      backgroundColor="#44577b"
      foregroundColor="#1c2434"
      {...props}
    >
      <rect x="40" y="0" rx="6" ry="6" width="300" height="450" /> 
      <rect x="40" y="165" rx="0" ry="0" width="1" height="1" /> 
      <rect x="40" y="500" rx="0" ry="0" width="400" height="40" /> 
      <rect x="40" y="560" rx="0" ry="0" width="177" height="20" /> 
      <rect x="40" y="620" rx="0" ry="0" width="1200" height="100" /> 
      <rect x="40" y="730" rx="0" ry="0" width="300" height="40" />
    </ContentLoader>
  )
export default SkeletonInfo
