

import { useEffect, useState } from "react";
import "./styles.css";
import RequestForm from "./RequestForm";
import useMediaStore from "../../../../../store/slices/mediaStore";
import LayerCustomizer from "./LayerCustomizer";
// Switch state between 'Request for Image' and 'Configure Image'
function index({ position }) {
    let image = useMediaStore(state => state[position]);
    let [page, setPage] = useState<"requesting" | "readyCustomization">(image ? 'readyCustomization' : 'requesting')
    useEffect(() => {
        setPage(image ? 'readyCustomization' : 'requesting');
    }, [image])


    let Wizard;

    switch (page) {
        case "requesting":
            Wizard = RequestForm;
            break;
        case "readyCustomization":
            Wizard = LayerCustomizer
    }

    const handleNextStep = () => {
        setPage("readyCustomization");
    }

    const handleExit = () => {
        setPage("requesting")
    }

    console.log(image);

    return (
        <div className="image-form">
            {page === "requesting" ? <Wizard position={position} onComplete={handleNextStep} /> : <LayerCustomizer position={position} onExit={handleExit} />}
        </div>
    )
}




export default index