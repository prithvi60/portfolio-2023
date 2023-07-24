import { useEffect, useRef } from "react";

export default function VideoCard() {
  const vidRef = useRef();

  useEffect(() => {
    vidRef.current.play();
    // vidRef.current.muted=false;
  }, []);
  return (
    <video
      className=" videoplayer"
      ref={vidRef}
      muted
      autoPlay
      controls
      loop
      style={{
        width: "1024px",
        height: "670px",
        border: "none",
        borderradius: "20px",
        background: "#000000",
        touchAction: "none",
      }}
    >
      <source src="/demovid.mp4" type="video/mp4" />
      Your browser does not support the video tag.
    </video>
  );
}
