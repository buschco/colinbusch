import React from 'react'
import ContentLoader from 'react-content-loader'

export default function Loader() {
  return(
    <ContentLoader
      height={100}
      width={100}
      speed={2}
      primaryColor="#f3f3f3"
      secondaryColor="#ecebeb"  >
      <rect x="9.5" y="10" rx="0" ry="0" width="455.83" height="164" />
      <rect x="197.33" y="93" rx="0" ry="0" width="34" height="20" />
      <rect x="217.33" y="19" rx="0" ry="0" width="30" height="43" />
      <rect x="357.33" y="135" rx="0" ry="0" width="0" height="0" />
      <rect x="8.33" y="182" rx="0" ry="0" width="391" height="111" />
    </ContentLoader>
  )
}
