import React from 'react'
import TextContainer from '../../SlideContainer/TextContainer'
import kakaGlobalState, { PRESET_LAYOUT } from '../../../store/slices/slideModifications';
type Props = {}

function RegularLayout({ }: Props) {
    let colorFilter = kakaGlobalState(state => state.colorFilter);
    return (
        <>
            <TextContainer defaultText={PRESET_LAYOUT[colorFilter].title.value} defaultSize={PRESET_LAYOUT[colorFilter].title.fontSize} />
            <TextContainer defaultText={PRESET_LAYOUT[colorFilter].subtitle.value} />
            <TextContainer defaultText={PRESET_LAYOUT[colorFilter].subscript.value} defaultSize="xxs" />
            <div className="bottom-text">
                <TextContainer defaultText={"⏶"} defaultSize="sm" />
                <TextContainer defaultText={"動畫番號 無シ"} defaultSize="xxs" />
            </div>
        </>
    )
}

export default RegularLayout