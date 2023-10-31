


import { useRef, useState } from "react";
import useMediaStore from "../../../../../../store/slices/mediaStore";
import "./styles.css";
// Switch state between 'Request for Image' and 'Configure Image'

function sanitizeImageFile(file) {
    // Define the allowed MIME types
    const allowedMimeTypes = ["image/png", "image/jpg", "image/jpeg", "image/gif", "image/webp"];

    // Check if the file's MIME type is in the allowedMIMETypes array
    if (allowedMimeTypes.includes(file.type)) {
        return file; // File is allowed
    } else {
        return null; // File is not allowed
    }
}

function index({ position, onComplete }) {
    const setImage = useMediaStore(state => state.setImage);
    const [draggingOver, setDraggingOver] = useState(false);
    const ref = useRef<HTMLInputElement>(null);
    const handleImageDrop = (e) => {
        e.preventDefault();
        let dt = e.dataTransfer
        let image = dt.files[0]
        let sanitizedImage = sanitizeImageFile(image);
        if (image) {
            // save file as objectUrl
            const BGURL = URL.createObjectURL(sanitizedImage);
            console.log(BGURL, position);
            setImage(BGURL, position)
            onComplete();
        } else {
            setImage(null, position);
        }
    }

    return (
        <div className="request-form">
            <button data-draggingOver={draggingOver} onDragLeave={() => setDraggingOver(false)} onDragEnd={() => setDraggingOver(false)} onDragOver={(e) => { e.preventDefault(); setDraggingOver(true) }} onDrop={handleImageDrop} onClick={() => ref.current?.click()}>Drag and Drop Image Here</button>
            <input className="file-input" ref={ref} type="file" accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" name="" id="" onChange={(e) => {
                // access the uploaded image file and generate URL
                const image = e.currentTarget.files[0];
                if (image) {
                    // save file as objectUrl
                    const BGURL = URL.createObjectURL(image);
                    console.log(BGURL, position);
                    setImage(BGURL, position)
                    onComplete();
                } else {
                    setImage(null, position);
                }
            }} />
            <p>or pick from the storage</p>
            <div>
                <img src="https://placehold.co/150x100" alt="" />
                <img src="https://placehold.co/100" alt="" />
                <img src="https://placehold.co/100" alt="" />
                <img src="https://placehold.co/100" alt="" />
            </div>
        </div>
    )
}




export default index