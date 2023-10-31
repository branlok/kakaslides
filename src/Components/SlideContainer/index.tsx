import { useEffect, useLayoutEffect, useRef } from "react"
import kakaGlobalState from "../../store/slices/slideModifications"
import "./styled.css"
// import BgImage from "./BgImage";
import React from "react";
import RegularLayout from "../Layouts/Regular/RegularLayout";
import IdentityLayout from "../Layouts/Identity/IdentityLayout";
import ExcerptLayout from "../Layouts/Excerpt/ExcerptLayout";
import Background from "./Background";

function SlideContainer() {
    const backgroundColor = kakaGlobalState(state => state.blackBarsVisual.backgroundColor);
    const height = kakaGlobalState(state => state.blackBarsVisual.height);
    const mySlide = useRef<HTMLElement>(null);
    const [layoutType, setLayoutType] = React.useState("regular");

    useEffect(() => {
        switch (window.location.pathname) {
            case "/identity":
                setLayoutType('identity');
                break;
            case "/excerpt":
                setLayoutType('excerpt');
                break;
            default:
                setLayoutType('regular');
        }

    }, [])

    useEffect(() => {
        console.log(backgroundColor, 'reyooad me')
        mySlide.current.style.setProperty('--bar-height', `${height}px`)
        mySlide.current.style.setProperty('--bar-bgColor', `${backgroundColor}`)

    }, [height, backgroundColor])

    return (
        <div ref={mySlide} className='slide-container default-structure'>
            {/* <BgImage /> */}
            <Background />
            {layoutType === "regular" && <RegularLayout />}
            {layoutType === "identity" && <IdentityLayout />}
            {layoutType === "excerpt" && <ExcerptLayout />}
        </div>
    )
}

export default SlideContainer