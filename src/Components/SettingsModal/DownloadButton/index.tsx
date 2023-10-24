import React from 'react'
import './styles.css';
import * as htmlToImage from "html-to-image"


// import download from "downloadjs";

function UploadImageButton() {
    const [state, setState] = React.useState('idle')
    const present = {
        idle: "Download",
        loading: "Building",
    }

    React.useEffect(() => {
        if (state === "loading") {
            let nodez = document.querySelector('body');
            // html2canvas(nodez).then(function (canvas) {
            //     document.body.prepend(canvas);
            // });
            htmlToImage.toPng(nodez)
                .then(function (dataURL1) {
                    const link = document.createElement("a");
                    link.download = "attempt1";
                    link.href = dataURL1;
                    link.click();
                    setState('idle');
                    // return htmlToImage.toJpeg(nodez);
                    // htmlToImage.toPng(nodez).then(function (dataURL2) {
                    //     const link = document.createElement("a");
                    //     link.download = "attempt2";
                    //     link.href = dataURL2;
                    //     link.click();
                    //     // resolve(dataURL2);
                    //     setState('idle');
                    //     return dataURL2;
                    // })
                }).catch((err) => {
                    reject(err);
                });

        }
    }, [state])
    return (
        <button className="submit-button" disabled={state === "loading"} onClick={(e) => {
            setState('loading');
        }}>
            <span className="button-name">{present[state]}</span>
        </button >
    )
}

export default UploadImageButton

