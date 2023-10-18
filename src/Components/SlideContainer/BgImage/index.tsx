import React, { useEffect, useRef } from 'react'
import useMediaStore from '../../../store/slices/mediaStore';
import "./styles.css"
type Props = {}

function BgImage({ }: Props) {
    // Grabs Image URL FROM STORE
    let { mediaURL } = useMediaStore();
    let elem = useRef(null);
    useEffect(() => {
        if (elem.current)
            elem.current.style.backgroundImage = `url(${mediaURL})`;
    }, [elem])

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
        elem.current.style.backgroundPosition = x;
    }

    useEffect(() => {
        document.addEventListener("mousemove", parallax);
        return () => document.removeEventListener("mousemove", parallax);
    });

    return (
        <div className="overlay">
            <div className="overlay-2"></div>
            <div ref={elem} className="bg-image-container"></div>
        </div>
    )
}

export default BgImage