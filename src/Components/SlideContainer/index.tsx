import { useLayoutEffect, useRef } from "react"
import useBlackbarSettings from "../../store/slices/slideModifications"
import "./styled.css"
import BgImage from "./BgImage";
import TextContainer from "./TextContainer";
import React from "react";

type Props = {}

export let PRESET_LAYOUT = {
    '#dd0a0a': {
        title: {
            value: "赤 齣",
            fontSize: "md"
        },
        subtitle: {
            value: "aka.",
            fontSize: 'xs'
        },
        subscript: {
            value: "(135)",
            fontSize: 'xs'
        }
    },
    '#62608f': {
        title: {
            value: "楝 齣",
            fontSize: "md"
        },
        subtitle: {
            value: "nadekosnake.",
            fontSize: 'xs'
        },
        subscript: {
            value: "(6969)",
            fontSize: 'xs'
        }
    },
    '#fd7a71': {
        title: {
            value: "桃 齣",
            fontSize: "md"
        },
        subtitle: {
            value: "momo.",
            fontSize: 'xs'
        },
        subscript: {
            value: "(372)",
            fontSize: 'xs'
        }
    },
    '#9ec044': {
        title: {
            value: "桃 齣",
            fontSize: "md"
        },
        subtitle: {
            value: "moegi.",
            fontSize: 'xs'
        },
        subscript: {
            value: "(469)",
            fontSize: 'xs'
        }
    },
    '#811477': {
        title: {
            value: "紫 齣",
            fontSize: "md"
        },
        subtitle: {
            value: "murasaki.",
            fontSize: 'xs'
        },
        subscript: {
            value: "(036)",
            fontSize: 'xs'
        }
    },
    '#413424': {
        title: {
            value: "黒 齣",
            fontSize: "md"
        },
        subtitle: {
            value: "kuro.",
            fontSize: 'xs'
        },
        subscript: {
            value: "(629)",
            fontSize: 'xs'
        }
    },
    '#f9f4f8': {
        title: {
            value: "白",
            fontSize: "md"
        },
        subtitle: {
            value: "shiro.",
            fontSize: 'xs'
        },
        subscript: {
            value: "(4646)",
            fontSize: 'xs'
        }
    },
    '#f28f18': {
        title: {
            value: "黄 齣",
            fontSize: "md"
        },
        subtitle: {
            value: "ki.",
            fontSize: 'xs'
        },
        subscript: {
            value: "(0303)",
            fontSize: 'xs'
        }
    }
}

function SlideContainer({ }: Props) {
    let blackBarsVisual = useBlackbarSettings(state => state.blackBarsVisual);
    let colorFilter = useBlackbarSettings(state => state.colorFilter);
    let mySlide = useRef<HTMLElement>(null);

    useLayoutEffect(() => {
        if (mySlide.current) {
            mySlide.current.style.setProperty('--bar-height', `${blackBarsVisual.height}px`)
            mySlide.current.style.setProperty('--bar-bgColor', `${blackBarsVisual.backgroundColor}`)
        }

    }, [blackBarsVisual])

    return (
        <div ref={mySlide} className='slide-container default-structure'>
            <BgImage />
            <TextContainer defaultText={PRESET_LAYOUT[colorFilter].title.value} defaultSize={PRESET_LAYOUT[colorFilter].title.fontSize} />
            <TextContainer defaultText={PRESET_LAYOUT[colorFilter].subtitle.value} />
            <TextContainer defaultText={PRESET_LAYOUT[colorFilter].subscript.value} defaultSize="xxs" />
        </div>
    )
}

export default SlideContainer