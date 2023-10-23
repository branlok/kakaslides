import React from 'react'
import './styles.css';
import * as htmlToImage from "html-to-image";
import download from "downloadjs";

function UploadImageButton() {
    const [state, setState] = React.useState('idle')
    const present = {
        idle: "Download",
        loading: "Building",
    }
    return (
        <button className="submit-button" disabled={state === "loading"} onClick={(e) => {
            let nodez = document.querySelector('.slide-container');
            setState('loading');

            htmlToImage.toJpeg(nodez)
                .then(function (dataURL1) {
                    var link = document.createElement("a");
                    link.download = "attempt1.png";
                    link.href = dataURL1;
                    link.click();
                    // return htmlToImage.toJpeg(nodez);
                    htmlToImage.toJpeg(nodez).then(function (dataURL2) {
                        var link = document.createElement("a");
                        link.download = "attempt2.png";
                        link.href = dataURL2;
                        link.click();
                        resolve(dataURL2);
                    })
                }).catch((err) => {
                    reject(err);
                });
        }}>
            <span className="button-name">{present[state]}</span>
        </button >
    )
}

export default UploadImageButton