
import { useState } from 'react';
import classes from "./styles.module.css";

type TextAlignment = 'start' | 'center' | 'end' | 'justify'

const TEXTBOX_BOUNDARIES = ['min', 'md', 'lg']


function index({ defaultValue }) {
    const [textBoxBoundaryChoice, setTextBoxBoundaryChoice] = useState<TextBoxBoundaries>(defaultValue);

    const handleClick = (e) => {
        e.preventDefault();
        const length = TEXTBOX_BOUNDARIES.length;
        setTextBoxBoundaryChoice(prev => TEXTBOX_BOUNDARIES[(TEXTBOX_BOUNDARIES.indexOf(prev) + 1) % length]);
    }

    return (
        <button className={classes.toggleContainer} onClick={handleClick}>
            {<span>{textBoxBoundaryChoice}</span>}
        </button>
    )
}

export default index