import download from "downloadjs";
import { toPng } from "html-to-image";
import React from "react";

/**
 * Hook to generate screenshot
 */
function useScreenshot() {
  const captureRef = React.useRef(null);

  const [status, setStatus] = React.useState("idle");

  async function generateImage(cb) {
    // e.preventDefault()
    if (!captureRef?.current) {
      return;
    }
    try {
      setStatus("loading");
      //combat an unknown bug, thus require to render the first time.
      const imgBase64 = await toPng(captureRef.current, {
        quality: 0.01,
        pixelRatio: 1,
        height: captureRef.current.scrollHeight,
        canvasWidth: captureRef.current.scrollWidth,
        canvasHeight: captureRef.current.scrollHeight,
      });

      const imgBase643 = await toPng(captureRef.current, {
        quality: 1,
        pixelRatio: 1,
        height: captureRef.current.scrollHeight,
        canvasWidth: captureRef.current.scrollWidth * 2,
        canvasHeight: captureRef.current.scrollHeight * 2,
      });

      setStatus("success");
      await download(imgBase643, "generated.png", "image/png");
      cb(false);
    } catch (error) {
      setStatus("error");
      console.error(error);
    }
  }

  return {
    generateImage,
    captureRef,
    status,
  };
}

export default useScreenshot;
