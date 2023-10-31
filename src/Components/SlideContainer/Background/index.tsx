import { useEffect, useRef } from 'react'
import useMediaStore from '../../../store/slices/mediaStore';
import "./styles.css"
import kakaGlobalState from '../../../store/slices/slideModifications';
import hexToRgb from '../../../util/hexToRGB';

function BgImage() {
    // Grabs Image URL FROM STORE
    const { topImage, bottomImage, topImageZoom, topImageBlend, bottomImageZoom, bottomImageBlend, topImageSettings, bottomImageSettings } = useMediaStore();
    // topImageSettings
    let blendMode = kakaGlobalState(state => state.blendMode);
    let backgroundMotion = kakaGlobalState(state => state.backgroundMotion);


    let intensity = kakaGlobalState(state => state.intensity);
    let colorFilter = kakaGlobalState(state => state.colorFilter);

    // REFS
    let screenLayer = useRef(null);
    let ref = useRef(null)
    let topLayer = useRef(null);
    let bottomLayer = useRef(null);


    useEffect(() => {
        // track mouse movement;
        function parallax(e) {
            let _w = window.innerWidth / 2;
            let _h = window.innerHeight / 2;
            let _mouseX = e.clientX;
            let _mouseY = e.clientY;
            let _depth1 = `${10 - (_mouseX - _w) * -0.01}% ${10 - (_mouseY - _h) * -0.01
                }%`;
            let x = `${_depth1}`;
            let newX = x.split(' ');
            bottomLayer.current.style.transform = `scale(2) translate(${newX[0]}, ${newX[1]})`;
            topLayer.current.style.transform = `scale(2) translate(-${newX[0]}, -${newX[1]})`;
        }
        if (backgroundMotion === "Track Cursor") {
            document.addEventListener("mousemove", parallax);
        }
        return () => document.removeEventListener("mousemove", parallax);
    }, [backgroundMotion]);


    return (
        <div ref={ref} className="overlay" >
            <div ref={bottomLayer} className="overlay-1" style={{ backgroundImage: `url(${bottomImage})`, backgroundSize: bottomImageZoom, mixBlendMode: bottomImageBlend, animation: bottomImageSettings.noAnimation ? "none" : "SlideToRight 120s linear infinite", backgroundRepeat: bottomImageSettings.noRepeat ? "no-repeat" : "repeat", opacity: bottomImageSettings.opacity }}></div>
            <div ref={topLayer} className="overlay-2" style={{ backgroundImage: `url(${topImage})`, backgroundSize: topImageZoom, mixBlendMode: topImageBlend, animation: topImageSettings.noAnimation ? "none" : "SlideToRight 120s linear infinite", backgroundRepeat: topImageSettings.noRepeat ? "no-repeat" : "repeat", opacity: topImageSettings.opacity }}></div>
            <div ref={screenLayer} className="bg-image-container" style={{ backgroundColor: colorFilter, mixBlendMode: blendMode }}></div>
        </div >
    )
}

export default BgImage