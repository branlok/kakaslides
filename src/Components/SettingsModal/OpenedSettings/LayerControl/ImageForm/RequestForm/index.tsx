


import { useRef, useState } from "react";
import useMediaStore from "../../../../../../store/slices/mediaStore";
import "./styles.css";
import MariaHolic from "../../../../../../assets/minimalbg/MariaHolic.png"
import TsubasaCat from "../../../../../../assets/minimalbg/TsubasaCat.png"
import patternPlain from "../../../../../../assets/minimalbg/patternPlain.png"
import WoodScene_optimized from "../../../../../../assets/minimalbg/WoodScene_optimized.jpg"
import Basic001 from "../../../../../../assets/minimalbg/Basic001.png"
import Basic002 from "../../../../../../assets/minimalbg/Basic002.png"
import Basic003 from "../../../../../../assets/minimalbg/Basic003.png"
import Basic004 from "../../../../../../assets/minimalbg/Basic004.png"
import Basic005 from "../../../../../../assets/minimalbg/Basic005.png"
import Basic006 from "../../../../../../assets/minimalbg/Basic006.png"
import araragi from "../../../../../../assets/minimalbg/araragi.png"
import kisshot from "../../../../../../assets/minimalbg/kissshot.png"
import donut1 from "../../../../../../assets/minimalbg/donut01.png"
import donut2 from "../../../../../../assets/minimalbg/donut02.png"
import donut3 from "../../../../../../assets/minimalbg/donut03.png"
import donut4 from "../../../../../../assets/minimalbg/donut04.png"
import donut5 from "../../../../../../assets/minimalbg/donut05.png"
import books_a_shadow from "../../../../../../assets/minimalbg/books_a_shadow.png"
import books_side_a from "../../../../../../assets/minimalbg/books_side_a.png"
import books_sideb from "../../../../../../assets/minimalbg/books_sideb.png"
import ImageShuffle from "./ImageShuffle";


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

            setImage(BGURL, position)
            onComplete();
        } else {
            setImage(null, position);
        }
    }

    const handlePickStorage = (e) => {
        let src = e.currentTarget.src;

        setImage(src, position)
        onComplete();

    }
    return (
        <div className="request-form">
            <button data-draggingover={draggingOver} onDragLeave={() => setDraggingOver(false)} onDragEnd={() => setDraggingOver(false)} onDragOver={(e) => { e.preventDefault(); setDraggingOver(true) }} onDrop={handleImageDrop} onClick={() => ref.current?.click()}>Drag and Drop Image Here</button>
            <input className="file-input" ref={ref} type="file" accept="image/png, image/jpeg, image/jpg, image/gif, image/webp" name="" id="" onChange={(e) => {
                // access the uploaded image file and generate URL
                const image = e.currentTarget.files[0];
                if (image) {
                    // save file as objectUrl
                    const BGURL = URL.createObjectURL(image);

                    setImage(BGURL, position)
                    onComplete();
                } else {
                    setImage(null, position);
                }
            }} />
            {/* <p>or pick from our storage <u>shuffle</u></p> */}
            <ImageShuffle onClick={handlePickStorage} images={[MariaHolic, patternPlain, TsubasaCat, WoodScene_optimized, Basic001, Basic002, Basic003, Basic004, Basic005, Basic006, donut1, donut2, donut3, donut4, donut5, araragi, kisshot, books_a_shadow, books_side_a, books_sideb]} />
            {/* <div>
                <img onClick={handlePickStorage} src={MariaHolic} alt="" loading="lazy" />
                <img onClick={handlePickStorage} src={TsubasaCat} alt="" loading="lazy" />
                <img onClick={handlePickStorage} src={patternPlain} alt="" loading="lazy" />
                <img onClick={handlePickStorage} src={Basic002} alt="" loading="lazy" />
                <img onClick={handlePickStorage} src={Basic001} alt="" loading="lazy" />
                <img onClick={handlePickStorage} src={WoodScene_optimized} alt="" loading="lazy" />
            </div> */}
        </div>
    )
}




export default index