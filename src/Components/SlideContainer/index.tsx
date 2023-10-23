import { useLayoutEffect, useRef } from "react"
import useBlackbarSettings from "../../store/slices/slideModifications"
import "./styled.css"
import BgImage from "./BgImage";
import React from "react";
import RegularLayout from "../Layouts/Regular/RegularLayout";
import IdentityLayout from "../Layouts/Identity/IdentityLayout";
import ExcerptLayout from "../Layouts/Excerpt/ExcerptLayout";

function SlideContainer() {
    const blackBarsVisual = useBlackbarSettings(state => state.blackBarsVisual);
    const mySlide = useRef<HTMLElement>(null);
    const [layoutType, setLayoutType] = React.useState("regular");

    useLayoutEffect(() => {
        if (mySlide.current) {
            mySlide.current.style.setProperty('--bar-height', `${blackBarsVisual.height}px`)
            mySlide.current.style.setProperty('--bar-bgColor', `${blackBarsVisual.backgroundColor}`)
        }

    }, [blackBarsVisual])

    

    return (
        <div ref={mySlide} className='slide-container default-structure'>
            <BgImage />
            {layoutType === "regular" && <RegularLayout />}
            {layoutType === "identity" && <IdentityLayout />}
            {layoutType === "excerpt" && <ExcerptLayout />}
        </div>
    )
}

export default SlideContainer