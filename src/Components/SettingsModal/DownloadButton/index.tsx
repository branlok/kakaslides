import React from 'react'
import './styles.css';
import * as htmlToImage from "html-to-image";
import download from "downloadjs";
import useMediaStore from '../../../store/slices/mediaStore';
type Props = {}

function UploadImageButton({ }: Props) {
    let mediaURL = useMediaStore(state => state.mediaURL);
    let [state, setState] = React.useState('idle')
    const present = {
        idle: "Download",
        loading: "Building",
    }
    return (
        <button className="submit-button" disabled={state === "loading"} onClick={(e) => {
            let nodez = document.querySelector('.slide-container');
            setState('loading');
            htmlToImage.toPng(nodez).then(function (dataUrl) {
                download(dataUrl, 'my-node.png');
                setState('idle');
            })
                .catch(function (error) {
                    console.error('oops, something went wrong!', error);
                });
        }}>
            <span className="button-name">{present[state]}</span>
        </button>
    )
}

export default UploadImageButton