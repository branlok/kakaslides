import React from 'react'
import TextContainer from '../../SlideContainer/TextContainer'
import useBlackbarSettings, { PRESET_LAYOUT } from '../../../store/slices/slideModifications';
type Props = {}

function RegularLayout({ }: Props) {
    let colorFilter = useBlackbarSettings(state => state.colorFilter);
    return (
        <>
            <TextContainer defaultText={PRESET_LAYOUT[colorFilter].title.value} defaultSize={PRESET_LAYOUT[colorFilter].title.fontSize} />
            <TextContainer defaultText={PRESET_LAYOUT[colorFilter].subtitle.value} />
            <TextContainer defaultText={PRESET_LAYOUT[colorFilter].subscript.value} defaultSize="xxs" />
            <div className="bottom-text">
                <TextContainer defaultText={"⏶"} defaultSize="sm" />
                <TextContainer defaultText={"4K09"} defaultSize="xxs" />
            </div>
        </>
    )
}

export default RegularLayout