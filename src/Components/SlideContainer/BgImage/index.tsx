import { useEffect, useRef } from 'react'
import useMediaStore from '../../../store/slices/mediaStore';
import "./styles.css"
import kakaGlobalState from '../../../store/slices/slideModifications';
import hexToRgb from '../../../util/hexToRGB';

function BgImage() {
    // Grabs Image URL FROM STORE
    let { topImage, bottomImage } = useMediaStore();
    let blendMode = kakaGlobalState(state => state.blendMode);
    let backgroundMotion = kakaGlobalState(state => state.backgroundMotion);
    let intensity = kakaGlobalState(state => state.intensity);
    let colorFilter = kakaGlobalState(state => state.colorFilter);
    let elem = useRef(null);
    let ref = useRef(null)
    let overlay = useRef(null);
    let overlay1 = useRef(null);
    useEffect(() => {
        if (overlay.current && overlay1.current) {
            let placeholderImg = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/epARJYAAAAASUVORK5CYII=";
            // overlay.current.style.backgroundImage = `url(${topImage ?? placeholderImg}), url('${bottomImage ?? placeholderImg}')`;
            overlay.current.style.backgroundImage = `url(${topImage ?? placeholderImg})`;
            overlay1.current.style.backgroundImage = `url(${bottomImage ?? placeholderImg})`;
        }
    }, [overlay1, topImage, bottomImage, overlay])

    useEffect(() => {
        if (overlay1.current) {
            overlay1.current.style.setProperty("--blend-mode", blendMode);
            overlay.current.style.setProperty("--blend-mode", blendMode);
        }
    }, [overlay1.current, blendMode, overlay.current])

    useEffect(() => {
        if (elem.current) {
            let result = hexToRgb(colorFilter);
            // changing ratio bg 1 and bg 2
            overlay1.current.style.setProperty("--overlay1-opacity", `${intensity / 100}`)
            overlay.current.style.setProperty("--overlay2-opacity", `${1 - (intensity / 100)}`)
            elem.current.style.setProperty("--alpha-level", `rgba(${result[0]},${result[1]},${result[2]}, 1)`)
        }
    }, [intensity, colorFilter, overlay, overlay1])

    useEffect(() => {
        if (elem.current) {
            if (backgroundMotion === "Sliding") {
                elem.current.style.animation = "slide 80s linear infinite";
                // elem.current.style.backgroundSize = "contain"
                // elem.current.style.backgroundRepeat = "repeat"
                // elem.current.style.backgroundSize = "50%, 150%"
                // later you can configure this.
                // also known error with ios devices.
                // background-blend do not work properly.

            } else if (backgroundMotion === "Mouse Tracking") {
                elem.current.style.animation = "none";
                elem.current.style.backgroundSize = "50%, 150%"
            } else {
                elem.current.style.backgroundSize = "cover"
                elem.current.style.animation = "none";
            }
        }
    })





    useEffect(() => {
        // track mouse movement;
        function parallax(e) {
            let _w = window.innerWidth / 2;
            let _h = window.innerHeight / 2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${50 - (_mouseX - _w) * -0.01}% ${50 - (_mouseY - _h) * -0.01
                }%`;
            // let _depth2 = `${50 - (_mouseX - _w) * 0.02}% ${50 - (_mouseY - _h) * 0.02}%`;
            // let _depth3 = `${50 - (_mouseX - _w) * 0.06}% ${50 - (_mouseY - _h) * 0.06}%`;
            let x = `${_depth1}`;
            // elem.current.style.backgroundSize = `${_w * 2}px ${_h * 2}px`;
            let newX = x.split(' ');
            elem.current.style.backgroundPosition = x;
            if (backgroundMotion === "Off") {
                elem.current.style.backgroundPosition = "";
            }
            // console.log(`translate(${"5." + newX[0].slice(0, 2) + "%," + "5." + newX[1].slice(0, 2)}"%")`)
            x
            // elem.current.style.transform = `scale(1.2) translate(${"-1." + newX[0].slice(0, 2) + "%," + "1." + newX[1].slice(0, 2)}%)`;
        }
        document.addEventListener("mousemove", parallax);
        return () => document.removeEventListener("mousemove", parallax);
    }, [backgroundMotion]);

    return (
        <div ref={ref} className="overlay">
            <div ref={overlay1} className="overlay-1"></div>
            <div ref={overlay} className="overlay-2"></div>
            <div ref={elem} className="bg-image-container"></div>
        </div>
    )
}

export default BgImage