import React, { useEffect, useState } from "react";
import { Blurhash } from "react-blurhash";

function ImageWithPlaceholder({ imageInfo }) {
  const [loaded, setLoaded] = useState(false);

  useEffect(() => {
    const img = new Image();
    img.src = imageInfo.src;

    img.onload = () => {
      setLoaded(true);
    };
  }, [imageInfo.src]);

  return (
    <>
      {loaded ? (
        // <img
        //   src={imageInfo.src}
        //   className="image"
        //   style={{
        //     imageRendering: "auto",
        //   }}
        // />
        <Blurhash
          hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          width="40vmin"
          height="56vmin"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      ) : (
        <Blurhash
          hash="LEHV6nWB2yk8pyo0adR*.7kCMdnj"
          width="40vmin"
          height="56vmin"
          resolutionX={32}
          resolutionY={32}
          punch={1}
        />
      )}
    </>
  );
}

export default ImageWithPlaceholder;
