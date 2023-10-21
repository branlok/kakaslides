import React from 'react'
import './styles.css';
import useMediaStore from '../../../store/slices/mediaStore';
type Props = {
    position: string
}

function UploadImageButton({ position }: Props) {
    let state = useMediaStore();
    let setImage = useMediaStore(state => state.setImage);

    let ref = React.useRef<HTMLElement>(null);

    return (
        <>
            <button
                className="download-btn submit-button"
                data-status={state[position] !== null ? "carry-image" : "carry-none"}
                onClick={() => {
                    ref.current?.click();
                }}>
                <span className="button-name">{state[position] ? "Change" : "Upload"} Image</span>
                <span className="file-name">{state[position]?.substring(state[position].length - 15) ?? "no image"}</span>
            </button>
            <input className="file-input" ref={ref} type="file" name="" id="" onChange={(e) => {
                // access the uploaded image file and generate URL
                const image = e.currentTarget.files[0];
                // save file as objectUrl
                const BGURL = URL.createObjectURL(image);
                console.log(BGURL, position);
                setImage(BGURL, position)
            }} />
        </>
    )
}

export default UploadImageButton