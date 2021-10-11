import download from 'downloadjs'
import { toPng } from 'html-to-image'
import React from 'react'

/**
 * Hook to generate screenshot
 */
function useScreenshot() {
  const captureRef = React.useRef()

  const [status, setStatus] = React.useState('idle')

  async function generateImage(cb) {
    // e.preventDefault()
    if (!captureRef?.current) {
      return
    }
    try {
      setStatus('loading')
      const imgBase64 = await toPng(captureRef.current, {
        quality: 1,
        pixelRatio: 1,
        height: captureRef.current.scrollHeight,
        canvasWidth: captureRef.current.scrollWidth*2,
        canvasHeight: captureRef.current.scrollHeight*2
      })
      setStatus('success')
      download(imgBase64, 'generated.png')
      cb(false);
    } catch (error) {
      setStatus('error')
      console.error(error)
    }
  }

  return {
    generateImage,
    captureRef,
    status,
  }
}

export default useScreenshot
