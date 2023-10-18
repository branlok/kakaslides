import { useLayoutEffect, useRef } from "react"
import useBlackbarSettings from "../../store/slices/slideModifications"
import "./styled.css"
import BgImage from "./BgImage";
import TextContainer from "./TextContainer";

type Props = {}

function SlideContainer({ }: Props) {
    let blackBarsVisual = useBlackbarSettings(state => state.blackBarsVisual);
    let mySlide = useRef<HTMLElement>(null);
    useLayoutEffect(() => {
        console.log(mySlide.current);
        if (mySlide.current) {
            mySlide.current.style.setProperty('--bar-height', `${blackBarsVisual.height}px`)
            mySlide.current.style.setProperty('--bar-bgColor', `${blackBarsVisual.backgroundColor}`)
        }

    }, [blackBarsVisual])

    return (
        <div ref={mySlide} className='slide-container default-structure'>
            <BgImage />
            <TextContainer defaultText="赤 齣" defaultSize={"md"} />
            <TextContainer defaultText="Aka." />
            <TextContainer defaultText="(135)" defaultSize="xxs" />

        </div>
    )
}

export default SlideContainer