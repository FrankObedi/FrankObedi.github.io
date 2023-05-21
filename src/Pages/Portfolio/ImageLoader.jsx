import React, { useState } from "react";

export default function ImageLoader({ ImageSrc, caption, ImgSize, className }) {
  const [loaded, setLoaded] = useState(false);
  return (
    <>
      {loaded ? null : (
        <div
          style={{
            background: "rgba(0,0,0,.15)",
            height: ImgSize,
            width: ImgSize,
            border: "1px solid #78CCE2",
          }}
        />
      )}
      <img
        // className="project-card-img"
        className={className}
        src={ImageSrc}
        alt={caption}
        onLoad={() => setLoaded(true)}
      />
    </>
  );
}
