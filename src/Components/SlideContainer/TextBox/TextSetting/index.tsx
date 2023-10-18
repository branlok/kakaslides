import { useEffect, useLayoutEffect, useRef, useState } from 'react'
import { useSpring, animated, config } from "@react-spring/web"
import "./styles.css";
import useContent from '../../../../store/slices/content';
import WebFont from 'webfontloader';

type Props = {}
// 
function TextSetting({ settingsOpen, removeTooltip, turnOnEdit, turnOffEdit, edit, settingsFor }: Props) {
    const [props, api] = useSpring(
        () => ({
            from: { opacity: settingsOpen ? 0 : 1, translateY: settingsOpen ? 50 : 0 },
            to: { opacity: settingsOpen ? 1 : 0, translateY: settingsOpen ? 0 : 50 },
            config: config.gentle,
            // remove on rest
            onRest: () => {
                if (!settingsOpen) removeTooltip();
            }
        }),
        [settingsOpen]
    )
    let setValue = useContent(state => state.setValue)
    let setNewFont = useContent(state => state.setNewFont);
    if (settingsOpen === null) return null;
    return (
        <animated.div style={props} className="tooltip">
            <button onClick={() => {
                setNewFont('Pixelify Sans', settingsFor)
            }}>Aa</button>
            <button>Color</button>
            {!edit && <button onClick={() => turnOnEdit()}>Rewrite Text</button>}
            {edit && <button onClick={() => turnOffEdit()}>Cancel</button>}
            {edit && <button onClick={() => { turnOffEdit(); setValue(settingsFor) }}>Save</button>}
        </animated.div >
    )
}

export function SettingWrapper({ children, settingsFor }) {

    // null indicates it wasn't touched.
    let [hovering, setHovering] = useState<null | boolean>(null);
    let [settingsOpen, setSettingsOpen] = useState<boolean>(null);
    let setValue = useContent(state => state.setValue);
    let tooltipRef = useRef<HTMLElement>(null)
    let [text, setText] = useState("");
    useLayoutEffect(() => {
        let trackMouse = (e) => {
            let x = e.clientX;
            let y = e.clientY;
            if (tooltipRef.current) {
                tooltipRef.current.style.left = `${x + 10}px`;
                tooltipRef.current.style.top = `${y + 10}px`;
                tooltipRef.current.style.opacity = `1`;
            }
        }
        document.addEventListener('mousemove', trackMouse)
        return () => {
            document.removeEventListener('mousemove', trackMouse);
        }
    }, [])

    const onMouseOver = () => {
        // remove the cta-tooltip since user already did an action
        if (settingsOpen) { setHovering(false) } else {
            setHovering(true)
        }
    }
    const onMouseLeave = () => {
        if (settingsOpen) { setHovering(false) } else {
            setHovering(false)
        }
    }

    const toggleEditModeOn = () => {
        if (settingsOpen == null) {
            setSettingsOpen(true);
            setHovering(false);
        }
    }

    const updateText = (e) => {
        e.preventDefault();
        setValue(settingsFor);
        setSettingsOpen(null);
    }

    return (
        <div className={`text-setting-wrapper ${settingsOpen ? "focused" : ""}`} onClick={toggleEditModeOn} onMouseOver={onMouseOver} onMouseLeave={onMouseLeave}>
            {hovering && <div ref={tooltipRef} className="cta-tooltip">Click to Edit</div>}
            <TextBoxEditor settingsOpen={settingsOpen} closeSettings={setSettingsOpen} settingsFor={settingsFor} />
            {settingsOpen ? <FormInput updateText={updateText} settingsFor={settingsFor} setText={setText} /> : children
            }
        </div >
    )
}

function FormInput({ updateText, settingsFor, setText }) {
    let ref = useRef<HTMLInputElement>(null);
    let fontStyle = useContent(state => state.presetTextBox[settingsFor].appearance.fontStyle);
    let value = useContent(state => state.presetTextBox[settingsFor].draftValue);
    let [fontLoading, setFontLoading] = useState(false);
    let changeDraftValue = useContent(state => state.setDraftValue);
    useEffect(() => {
        if (ref.current) {
            ref.current.focus();
        }
    }, [ref.current])

    useEffect(() => {

        if (ref.current) {
            WebFont.load({
                google: {
                    families: [fontStyle]
                },
                loading: function () {
                    setFontLoading(true)
                },
                active: function () {
                    setFontLoading(false)
                },
                inactive: function () {
                    console.log('error');
                    setFontLoading(false)
                },
            });
            ref.current.style.setProperty("--font-family", fontStyle);

        }
    }, [fontStyle])

    return (
        <form onSubmit={updateText}>
            {fontLoading ? <img src="https://media.tenor.com/On7kvXhzml4AAAAj/loading-gif.gif" alt="" /> : <input ref={ref} value={value} className={settingsFor} placeholder={'enter new title'} onChange={(e) => {
                e.preventDefault();
                changeDraftValue(e.currentTarget.value, settingsFor)
            }}></input>}
        </form>
    )
}


function TextBoxEditor({ settingsOpen, closeSettings, settingsFor }) {

    const setNewFont = useContent((state) => state.setNewFont);
    let fontStyle = useContent(state => state.presetTextBox[settingsFor].appearance.fontStyle);
    const [props, api] = useSpring(
        () => ({
            from: { opacity: settingsOpen ? 0 : 1, translateY: settingsOpen ? 50 : 0 },
            to: { opacity: settingsOpen ? 1 : 0, translateY: settingsOpen ? 0 : 50 },
            config: {
                tension: 200,
                friction: 20
            },
            onRest: () => {
                if (settingsOpen === false) closeSettings(null); console.log('ran because false')
            },
        }),
        [settingsOpen]
    )

    const fontList = ['Roboto', 'Open Sans', 'Noto Sans Japanese', 'Montserrat', 'Lato', 'Poppins', 'Roboto Condensed', 'Inter', 'Roboto Mono', 'Oswald', 'Raleway', 'Noto Sans', 'Nunito Sans', 'Roboto Slab', 'Ubuntu', 'Nunito', 'Playfair Display', 'Rubik', 'Merriweather', 'PT Sans', 'Noto Sans Korean']

    if (settingsOpen === null) { return null } else {
        return <animated.div style={props} className="tooltip">
            {/* <button onClick={() => {
                setNewFont('Alumni Sans Collegiate One', settingsFor);
            }}>Aa</button> */}
            <select defaultValue={fontStyle} onChange={(e) => {
                let value = e.currentTarget.value;
                setNewFont(value, settingsFor);
            }}>
                {fontList.map(item => <option key={item} value={item}>{item}</option>)}
            </select>
            <button>Color</button>
            <button onClick={() => { closeSettings(false); }}>Close</button>
        </animated.div >

    }
}


export default TextSetting