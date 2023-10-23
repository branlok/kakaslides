import { useLayoutEffect, useRef } from "react"
import useBlackbarSettings from "../../store/slices/slideModifications"
import "./styled.css"
import BgImage from "./BgImage";
import TextContainer from "./TextContainer";
import React from "react";
import RegularLayout from "../Layouts/Regular/RegularLayout";
import IdentityLayout from "../Layouts/Identity/IdentityLayout";

type Props = {}

function SlideContainer({ }: Props) {
    let blackBarsVisual = useBlackbarSettings(state => state.blackBarsVisual);
    let mySlide = useRef<HTMLElement>(null);
    let [layoutType, setLayoutType] = React.useState("identity");

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
            {/* <TextContainer defaultText={PRESET_LAYOUT[colorFilter].title.value} defaultSize={PRESET_LAYOUT[colorFilter].title.fontSize} />
            <TextContainer defaultText={PRESET_LAYOUT[colorFilter].subtitle.value} />
            <TextContainer defaultText={PRESET_LAYOUT[colorFilter].subscript.value} defaultSize="xxs" />
            <div className="bottom-text">
                <TextContainer defaultText={"⏶"} defaultSize="sm" />
                <TextContainer defaultText={"4K09"} defaultSize="xxs" />
            </div> */}

        </div>
    )
}

export default SlideContainer