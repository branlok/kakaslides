import { useEffect, useLayoutEffect, useRef } from "react"
import useBlackbarSettings from "../../store/slices/slideModifications"
import "./styled.css"
import TextBox from "./TextBox";
import { SettingWrapper } from "./TextBox/TextSetting";
import BgImage from "./BgImage";
import useContent from "../../store/slices/content";
import TextContainer from "./TextContainer";

type Props = {}

function SlideContainer({ }: Props) {
    let blackBarsVisual = useBlackbarSettings(state => state.blackBarsVisual);
    let [TITLE, SUBTITLE, FOOTERTEXT] = useContent(state => state.presets);
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
            {/* <div className="title-subtitle-wrapper">
                <SettingWrapper settingsFor={TITLE}>
                    <TextBox type={TITLE} />
                </SettingWrapper>
                <SettingWrapper settingsFor={SUBTITLE}>
                    <TextBox type={SUBTITLE} />
                </SettingWrapper>
            </div>
            <div className="footer-title-wrapper">
                <SettingWrapper settingsFor={FOOTERTEXT}>
                    <TextBox type={FOOTERTEXT} />
                </SettingWrapper>
            </div> */}
        </div>
    )
}

export default SlideContainer