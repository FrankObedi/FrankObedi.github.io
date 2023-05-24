import React from "react";

export default function VideoLoader() {
  return (
    <iframe
      className="video-card"
      width="585"
      height="498"
      src="https://www.youtube.com/embed/ZDVa43x2r94"
      title="Bike Shop Manager"
      frameborder="0"
      allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
      allowfullscreen
    ></iframe>
  );
}
