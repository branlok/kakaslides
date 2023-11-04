import React from "react";
import classes from "./styles.module.css";
import ColorPicker from "../ColorPicker";
import TextAlignment, { ALIGNMENT_ORDER } from "../TextAlignment";
import TextboxSize from "../TextboxSize";


function Tooltip({ alignChoice, setAlignChoice, parentRef, fontColor, setFontColor, turnOffEditMode, parentContainer, defaultFont, setCurrentFont, onClose }) {

    let [selectFont, setSelectFont] = React.useState(defaultFont);
    // let currentState = useGoogleFonts(parentContainer, selectFont);
    let [revealColorPicker, setRevealColorPicker] = React.useState(false);
    const fontList = ['Arial', 'Sometype Mono', 'Playfair Display', 'Josefin Sans', 'Pixelify Sans', 'Charm', 'Noto Sans Japanese', 'Noto Sans Korean'];
    let ref = React.useRef<HTMLElement>(null);



    const switchFont = (e) => {
        e.preventDefault();
        setSelectFont(e.currentTarget.value);
        setCurrentFont(e.currentTarget.value);
    }

    const handleTextAlignment = (alginment) => {
        parentRef.current.style.setProperty('--text-align', alginment);
    }

    const handleClick = (e) => {
        e.preventDefault();
        const length = ALIGNMENT_ORDER.length;
        handleTextAlignment(ALIGNMENT_ORDER[(ALIGNMENT_ORDER.indexOf(alignChoice) + 1) % length])
        setAlignChoice(prev => ALIGNMENT_ORDER[(ALIGNMENT_ORDER.indexOf(prev) + 1) % length]);
    }


    return <div ref={ref} className={classes.editTooltipWrapper}>
        <div className={classes.editTooltipContainer}>
            <select className={classes.fontSelect} defaultValue={selectFont} onChange={switchFont}>
                {fontList.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
            <div className={classes.choiceWrappers}>
                <div className={classes.colorOptionContainer}>
                    <div className={classes.colorCircle} onClick={() => setRevealColorPicker(prev => !prev)}></div>
                    {revealColorPicker && <ColorPicker onSelect={(color) => setFontColor(color)} />
                    }
                </div>
                <TextAlignment defaultValue={alignChoice} onClick={handleClick} />
                <TextboxSize defaultValue={'sm'} />

            </div>
            <span >Press Esc to Cancel</span>
        </div>
    </div>
}

export default Tooltip;