import React from 'react'
import "./styles.css"
import WebFont from 'webfontloader';
import { Github } from "@uiw/react-color"
type Props = {
    defaultText?: string
    defaultSize?: "xxs" | "xs" | "sm" | "md" | "lg"
}

function TextContainer({ defaultText = "My Guy", defaultSize = "xs" }: Props) {
    let [text, setText] = React.useState(defaultText);
    let [fontFamily, setFontFamily] = React.useState("Arial");
    let [fontColor, setFontColor] = React.useState("White");
    let [editMode, setEditMode] = React.useState(false);
    let [hovering, setHovering] = React.useState(false);
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
    }


    return (
        <div ref={ref} onClick={turnOnEditMode} onMouseOver={mouseInContainer} onMouseLeave={mouseLeftContainer} className={`text-container ${size} ${editMode ? "edit-on" : ""}`}>
            {hovering && !editMode && <CTA />}
            {editMode && <Tooltip fontColor={fontColor} setFontColor={setFontColor} turnOffEditMode={turnOffEditMode} parentContainer={ref} defaultFont={fontFamily} setCurrentFont={setFontFamily} />}
            {/* Toggle between EditMode and Presentation Mode */}
            {editMode ? <EditForm text={text} size={size} saveNewText={saveNewTextAndTurnOffEditMode} /> : <PresentableText size={size} text={text} />}
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

    return <div className="cta-message" ref={ref}>Click to Edit</div>
}
function Tooltip({ fontColor, setFontColor, turnOffEditMode, parentContainer, defaultFont, setCurrentFont }) {
    let [selectFont, setSelectFont] = React.useState(defaultFont);
    let currentState = useGoogleFonts(parentContainer, selectFont);
    let [revealColorPicker, setRevealColorPicker] = React.useState(false);
    const fontList = ['Arial', 'Roboto', 'Open Sans', 'Noto Sans JP', 'Montserrat', 'Lato', 'Poppins', 'Roboto Condensed', 'Inter', 'Roboto Mono', 'Oswald', 'Raleway', 'Noto Sans', 'Nunito Sans', 'Roboto Slab', 'Ubuntu', 'Nunito', 'Playfair Display', 'Rubik', 'Merriweather', 'PT Sans', 'Noto Sans Korean']
    let ref = React.useRef<HTMLElement>(null);
    const switchFont = (e) => {
        setSelectFont(e.currentTarget.value);
        setCurrentFont(e.currentTarget.value);
    }

    return <div ref={ref} className="edit-container">

        {currentState === "loading" ? <div>loading</div> : <select defaultValue={selectFont} onChange={switchFont}>
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
    return <div className={`presentable-text ${size}`}>{text}</div>
}

function useGoogleFonts(ref, fontStyle) {

    // this can be put into globalstate somewhere.
    let [fetchedSuccessfully, setFetchedSuccessfully] = React.useState<string[]>(['Arial']);
    let [currentState, setCurrentState] = React.useState("success");
    React.useEffect(() => {
        console.log(fetchedSuccessfully, fontStyle, ref.current)
        if (fontStyle === "Arial") ref.current.style.setProperty("--font-family", fontStyle);
        if (ref.current && !fetchedSuccessfully.includes(fontStyle)) {
            WebFont.load({
                google: {
                    families: [fontStyle]
                },
                loading: function () {
                    setCurrentState("loading")
                },
                active: function () {
                    setFetchedSuccessfully(prev => [...prev, fontStyle])
                    setCurrentState("success")
                },
                inactive: function () {
                },
            });
            ref.current.style.setProperty("--font-family", fontStyle);
        }
    }, [fontStyle, ref.current])

    return currentState;

}


export default TextContainer