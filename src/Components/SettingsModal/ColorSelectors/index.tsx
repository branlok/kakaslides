import React from 'react'
import './styles.css';
import useBlackbarSettings, { PRESET_LAYOUT } from '../../../store/slices/slideModifications';
type Props = {}

function ColorSelector({ }: Props) {
    // let PRESET_COLORS = ["#0B76DA", "#BC678B", "#9167BC", "#A6BC67", "#E3A541", "#e00c0c"];
    let PRESET_COLORS = Object.keys(PRESET_LAYOUT);
    let setFilterColor = useBlackbarSettings((state) => state.setColorFilter);
    let colorFilter = useBlackbarSettings((state) => state.colorFilter);

    return (
        <div className="color-list">
            {PRESET_COLORS.map(item => (<div key={item}>
                <label data-selected={colorFilter === item} className="color" htmlFor={item} style={{ backgroundColor: item }}>
                    <input type="radio" name="color" value={item} onClick={(e) => {
                        setFilterColor(e.currentTarget.value);
                    }} ></input></label>
            </div>))
            }
        </div >
    )
}

export default ColorSelector