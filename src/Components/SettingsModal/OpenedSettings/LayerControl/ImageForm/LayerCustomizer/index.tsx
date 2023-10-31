


import { useEffect, useRef, useState } from "react";
import "./styles.css";
import StepUpButton from "./StepUpButton";
import useMediaStore, { BLEND_MODES } from "../../../../../../store/slices/mediaStore";
// Switch state between 'Request for Image' and 'Configure Image'

function index({ position, onExit }) {
    let ref = useRef<HTMLElement>(null);
    let inputRef = useRef<HTMLInputElement>(null);
    const setNewBlendMode = useMediaStore(state => state.setNewBlendMode);
    const imageSettings = useMediaStore(state => state[position + "Settings"]);
    const imageURL = useMediaStore(state => state[position]);
    const setImage = useMediaStore(state => state.setImage);
    const blendMode = useMediaStore(state => state[position + "Blend"]);
    const setImageSettings = useMediaStore(state => state.setImageSettings);

    const handleBlendModeChange = (e) => {
        e.preventDefault();
        setNewBlendMode(e.currentTarget.value, position);
    }

    const handleOpacityChange = (e) => {
        e.preventDefault();
        setImageSettings(e.currentTarget.value / 100, position, 'opacity')
    }

    useEffect(() => {
        if (ref.current) {
            ref.current.style.setProperty("--image-url", `url(${imageURL})`)
        }
    }, [imageURL])

    // handlers
    let handleReplaceImage = () => {

    }

    let handleDeleteAndReset = () => {
        setImage(null, position);
        onExit();
    }


    return (
        <div ref={ref} className="background-layer-customizer">
            <div className="group">
                <StepUpButton position={position} />
                <div className="mix-blend">
                    <select name="" id="" onChange={handleBlendModeChange} defaultValue={blendMode}>
                        {BLEND_MODES.map(item => {
                            return <option key={item} value={item}>{item}</option>
                        })}
                    </select>
                </div>
            </div>
            <form className="group highlight" onSubmit={(e) => e.preventDefault()}>
                <label htmlFor="no-repeat">No Repeat</label>
                <input type="checkbox" name="no-repeat" value={imageSettings.noRepeat} onClick={() => setImageSettings(!imageSettings.noRepeat, position, 'noRepeat')} />
                <label htmlFor="no-animation">No Animation</label>
                <input type="checkbox" name="no-animation" value={imageSettings.noAnimation} onClick={() => setImageSettings(!imageSettings.noAnimation, position, 'noAnimation')} />
            </form>
            <div className="group">
                <label htmlFor="">Opacity</label>
                <input type="range" name="" id="" min={0} max={100} value={imageSettings.opacity * 100} onChange={handleOpacityChange} />
            </div>
            <div className="group">
                <button className="toggle-button" onClick={() => inputRef.current?.click()}>Replace Image</button>
                <button className="toggle-button" onClick={handleDeleteAndReset}>Delete</button>
                <input className="file-input" ref={inputRef} type="file" name="" id="" onChange={(e) => {
                    // access the uploaded image file and generate URL
                    const image = e.currentTarget.files[0];
                    if (image) {
                        const BGURL = URL.createObjectURL(image);
                        setImage(BGURL, position)
                    } else {
                        setImage(null, position);
                    }
                }} />
            </div>
        </div>
    )
}




export default index