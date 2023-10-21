import React, { useEffect, useRef } from 'react'
import useMediaStore from '../../../store/slices/mediaStore';
import "./styles.css"
import useBlackbarSettings from '../../../store/slices/slideModifications';
import hexToRgb from '../../../util/hexToRGB';
type Props = {}

function BgImage({ }: Props) {
    // Grabs Image URL FROM STORE
    let { topImage, bottomImage } = useMediaStore();
    let blendMode = useBlackbarSettings(state => state.blendMode);
    let backgroundMotion = useBlackbarSettings(state => state.backgroundMotion);
    let intensity = useBlackbarSettings(state => state.intensity);
    let colorFilter = useBlackbarSettings(state => state.colorFilter);
    let elem = useRef(null);
    let ref = useRef(null)
    useEffect(() => {
        if (elem.current) {
            let placeholderImg = "iVBORw0KGgoAAAANSUhEUgAAAAEAAAABCAQAAAC1HAwCAAAAC0lEQVR42mP8/wcAAwAB/epARJYAAAAASUVORK5CYII=";
            elem.current.style.backgroundImage = `url(${topImage ?? placeholderImg}), url('${bottomImage ?? placeholderImg}')`;
        }
    }, [elem, topImage, bottomImage])

    useEffect(() => {
        if (elem.current) {
            elem.current.style.setProperty("--blend-mode", blendMode);
        }
    }, [elem.current, blendMode])

    useEffect(() => {
        if (elem.current) {
            let result = hexToRgb(colorFilter);
            elem.current.style.setProperty("--alpha-level", `rgba(${result[0]},${result[1]},${result[2]}, ${intensity / 100})`)
        }
    }, [intensity, colorFilter])

    useEffect(() => {
        if (elem.current) {
            if (backgroundMotion === "Sliding") {
                elem.current.style.animation = "slide 80s linear infinite";
                elem.current.style.backgroundSize = "50%, 150%"
            } else if (backgroundMotion === "Mouse Tracking") {
                elem.current.style.animation = "none";
                elem.current.style.backgroundSize = "50%, 150%"
            } else {
                elem.current.style.backgroundSize = "cover"
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
            <div className="overlay-2"></div>
            <div ref={elem} className="bg-image-container"></div>
        </div>
    )
}

export default BgImage