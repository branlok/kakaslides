import { useState } from "react";
import "./styles.css";
// type Props = {}
import * as htmlToImage from "html-to-image"
function index({ handleOpenSettings }) {
    let [downloadStatus, setDownloadStatus] = useState('idle');

    const toggleFullScreen = () => {
        if (!document.fullscreenElement) {
            document.documentElement.requestFullscreen();
        } else if (document.exitFullscreen) {
            document.exitFullscreen();
        }
    }
    const downloadSlide = () => {
        setDownloadStatus('loading');
        let targetNode = document.querySelector('.slide-container');
        targetNode?.classList.add('saving');
        htmlToImage.toPng(targetNode).then(function () {
            htmlToImage.toPng(targetNode).then(function () {
                htmlToImage.toPng(targetNode, { cacheBust: true }).then(function () {
                    htmlToImage.toPng(targetNode, { cacheBust: true }).then(function (dataURL2) {
                        const link = document.createElement("a");
                        // allow name edit next time
                        link.download = "slide";
                        link.href = dataURL2;
                        link.click();
                        setDownloadStatus('idle');
                        targetNode?.classList.remove('saving');
                        return dataURL2;
                    })
                })
            })
        })
    }

    return (
        <div className="collapsed-settings">
            <button onClick={toggleFullScreen}>Fullscreen</button>
            <button onClick={downloadSlide} disabled={downloadStatus === "loading"}>Download</button>
            <button onClick={handleOpenSettings}>Customize</button>
        </div>
    )
}



export default index