import React from 'react'
import "./styles.css"
// import WebFont from 'webfontloader';
import { Github } from "@uiw/react-color"
import kakaGlobalState from '../../../store/slices/slideModifications';
type Props = {
    defaultText?: string
    defaultTextLayout?: "vertical" | "horizontal"
    alignText?: "left" | "center"
    defaultSize?: "xxs" | "xs" | "sm" | "md" | "lg"
}

function TextContainer({ defaultText = "My Guy", defaultSize = "xs", defaultTextLayout = "horizontal", alignText = "center" }: Props) {
    let [text, setText] = React.useState(defaultText);
    let [fontFamily, setFontFamily] = React.useState("Arial");
    let [fontColor, setFontColor] = React.useState("White");
    let [editMode, setEditMode] = React.useState(false);
    let [hovering, setHovering] = React.useState(false);
    let [textLayout, setTextLayout] = React.useState(defaultTextLayout);

    // if touched, then we no longer use default text;
    let [contaminated, setcontaminated] = React.useState(false);
    let [size, setSize] = React.useState<"xs" | "sm" | "md" | "lg">(defaultSize)
    let ref = React.useRef(null);

    React.useEffect(() => {
        if (ref.current) {
            console.log('this ran')
            ref.current.style.setProperty(
                '--text-color', fontColor);
        }
    }, [fontColor])

    const mouseInContainer = () => {
        setHovering(true);
    }

    const mouseLeftContainer = () => {
        setHovering(false);
    }

    const turnOnEditMode = () => {
        if (!editMode) setEditMode(true);
    }

    const turnOffEditMode = () => {
        setEditMode(false);
    }
    const saveNewTextAndTurnOffEditMode = (val) => {
        setText(val);
        setEditMode(false);
        setcontaminated(true);
    }


    return (
        <div ref={ref} onClick={turnOnEditMode} onMouseOver={mouseInContainer} onMouseLeave={mouseLeftContainer} className={`text-container ${size} ${editMode ? "edit-on" : ""} ${textLayout === "vertical" ? "vertical" : ""} ${alignText === "left" ? "text-left" : ""}`}>
            {hovering && !editMode && <CTA />}
            {editMode && <Tooltip fontColor={fontColor} setFontColor={setFontColor} turnOffEditMode={turnOffEditMode} parentContainer={ref} defaultFont={fontFamily} setCurrentFont={setFontFamily} />}
            {/* Toggle between EditMode and Presentation Mode */}
            {editMode ? <EditForm text={text} size={size} saveNewText={saveNewTextAndTurnOffEditMode} /> : <PresentableText size={size} text={!contaminated ? defaultText : text} />}
        </div>
    )
}

function CTA() {
    // CTA MOVES WITH THE CURSOR
    let ref = React.useRef(null);
    React.useLayoutEffect(() => {
        let trackMouse = (e) => {
            let x = e.clientX;
            let y = e.clientY;
            if (ref.current) {
                ref.current.style.left = `${x + 10}px`;
                ref.current.style.top = `${y + 10}px`;
                ref.current.style.opacity = `1`;

            }
        }
        document.addEventListener('mousemove', trackMouse)
        return () => {
            document.removeEventListener('mousemove', trackMouse);
        }
    }, [])
    return null;
    // return <div className="cta-message" ref={ref}>Click to Edit</div>
}

function Tooltip({ fontColor, setFontColor, turnOffEditMode, parentContainer, defaultFont, setCurrentFont }) {
    let [selectFont, setSelectFont] = React.useState(defaultFont);
    let currentState = useGoogleFonts(parentContainer, selectFont);
    let [revealColorPicker, setRevealColorPicker] = React.useState(false);
    const fontList = ['Arial', 'Sometype Mono', 'Playfair Display', 'Josefin Sans', 'Pixelify Sans', 'Charm', 'Noto Sans Japanese', 'Noto Sans Korean'];
    let ref = React.useRef<HTMLElement>(null);
    const switchFont = (e) => {
        e.preventDefault();
        setSelectFont(e.currentTarget.value);
        setCurrentFont(e.currentTarget.value);
    }

    return <div ref={ref} className="edit-container">

        {currentState === "loading" ? <div>loading</div> : <select className="font-select" defaultValue={selectFont} onChange={switchFont}>
            {fontList.map(item => <option key={item} value={item}>{item}</option>)}
        </select>}

        <div className="color-option-container">
            <div className="color-circle" onClick={() => setRevealColorPicker(prev => !prev)}></div>
            {revealColorPicker && <Github
                colors={["#FFFFFF", "#000000", "#FCDEBE", "#D4D2A5", "#928779", "#5E5768", "#3A445D", "red", "#c6248d", "#3e7e74", "green", "purple", "#0f2d7a", "orange", "#135c47", "#818c1f"]}
                placement='BottonRight'
                className="color-picker"
                color={fontColor}
                onChange={(color) => setFontColor(color.hex)} />}
        </div>

        <span>Press Enter to Exit</span>

    </div>
}
function EditForm({ text, size, saveNewText }) {
    let [draftText, setDraftText] = React.useState(text);
    let ref = React.useRef(null);
    const updateText = (e) => {
        e.preventDefault()
        setDraftText(e.currentTarget.value)
    }

    const SubmitForm = (e) => {
        e.preventDefault();
        saveNewText(draftText)
    }

    React.useEffect(() => {
        if (ref.current) {
            ref.current.focus()
        }
    }, [ref.current])

    return (
        <form onSubmit={SubmitForm}>
            <input ref={ref} className={size} onChange={updateText} type="text" value={draftText}></input>
        </form>
    )
}
function PresentableText({ text, size }) {

    let textMotion = kakaGlobalState(state => state.textMotion);
    let mapping = {
        ["Fast"]: "fast-animation",
        ["Slow"]: "slow-animation",
        ["None"]: "no-animation"
    }

    return <div className={`presentable-text ${size} ${mapping[textMotion]}`}>{text}</div>
}

function useGoogleFonts(ref, fontStyle) {

    // this can be put into globalstate somewhere.
    const [fetchedSuccessfully, setFetchedSuccessfully] = React.useState<string[]>(['Arial']);
    const [currentState, setCurrentState] = React.useState("success");
    React.useEffect(() => {
        console.log(fetchedSuccessfully, fontStyle, ref.current)
        if (fontStyle === "Arial") ref.current.style.setProperty("--font-family", fontStyle);
        if (ref.current && !fetchedSuccessfully.includes(fontStyle)) {

            // WebFont.load({
            //     google: {
            //         families: [`${fontStyle}:400`]
            //     },
            //     loading: function () {
            //         setCurrentState("loading")
            //     },
            //     active: function () {
            //         setFetchedSuccessfully(prev => [...prev, fontStyle])
            //         setCurrentState("success")
            //         function appendFont(font: string, url: string) {
            //             const fontCss = document.createElement("style");
            //             const fontCssRule = `
            //                           @font-face {
            //                           font-family: "${font}";
            //                           src: url("${url}"),
            //                         }`;

            //             fontCss.appendChild(document.createTextNode(fontCssRule));
            //             document.head.appendChild(fontCss);
            //         }
            //         // appendFont(fontStyle, )
            //     },
            //     inactive: function () {
            //     },
            //     fontactive: function (familyName, fvd) {
            //         const styleSheets = Array.from(document.styleSheets);

            //         console.log(styleSheets);


            //         console.log(Array.from(document.fonts));
            //     }
            // });
            // var sheet = window.document.styleSheets[0];
            // sheet.insertRule(`@font-face {font-family: '${fontStyle}'};`)
            ref.current.style.setProperty("--font-family", fontStyle);
        }
    }, [fontStyle, ref.current])

    return currentState;

}


export default TextContainer