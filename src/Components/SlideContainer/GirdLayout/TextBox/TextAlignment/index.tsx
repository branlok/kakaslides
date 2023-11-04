
import { useState } from 'react';
import alignCenter from '../../../../../assets/text-align-center-svgrepo-com.svg'
import alignLeft from '../../../../../assets/text-align-left-svgrepo-com (1).svg'
import alignRight from '../../../../../assets/text-align-right-svgrepo-com.svg'
import justify from '../../../../../assets/text-align-justify-svgrepo-com.svg'
import classes from "./styles.module.css";
type TogglableItem = {
    title: string,
    image?: string,
}

type Props = {
    id: string,
    items: Array<TogglableItem>
    usage: 'string' | 'image'
}

type TextAlignment = 'start' | 'center' | 'end' | 'justify'

export const ALIGNMENT_ICONS = {
    'start': alignLeft,
    'center': alignCenter,
    'end': alignRight,
    'justify': justify
}

export const ALIGNMENT_ORDER = Object.keys(ALIGNMENT_ICONS);

function index({ defaultValue, onClick }) {

    return (
        <button className={classes.toggleContainer} onClick={onClick}>
            {<img src={ALIGNMENT_ICONS[defaultValue]} alt="" />}
        </button>
    )
}

export default index