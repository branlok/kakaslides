import { useEffect, useRef, useState } from 'react'
import WebFont from 'webfontloader';
import "./styles.css"
import useContent from '../../../store/slices/content';

type Props = {
    type: 'title' | 'subtitle' | 'footerText'
}

// external state will provide colors, fonttype, fontcolor

function TextBox({ type }: Props) {

    // Get Text from GlobalStore
    let text = useContent(state => state.presetTextBox[type].value)
    let fontStyle = useContent(state => state.presetTextBox[type].appearance.fontStyle);
    let myRef = useRef(null);

    useEffect(() => {
        if (myRef.current) {
            WebFont.load({
                google: {
                    families: [fontStyle]
                }
            });
            myRef.current.style.setProperty("--font-family", fontStyle);
        }
    }, [fontStyle])

    return <h1 ref={myRef} className={type}>{text}</h1>
}

export default TextBox