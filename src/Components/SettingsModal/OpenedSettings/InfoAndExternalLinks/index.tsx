
import Kofi from "../../../../assets/outlets/Kofi.png"
import Github from "../../../../assets/outlets/Github.svg"

import "./styles.css";
import { useEffect, useRef } from "react";
function index() {
    let ref = useRef(null);

    useEffect(() => {

        let options = {
            root: document.querySelector('.opened-settings'),
            rootMargin: "0px",
            threshold: 1.0,
        };
        let callback = (entries, observer) => {
            entries.forEach((entry) => {
                if (entry.isIntersecting) {
                    entry.target.style.animation = 'fadingIn 0.6s ease forwards';
                } else if (!entry.isIntersecting) {
                    entry.target.style.animation = 'fadingOut 0.6s ease forwards ';
                }

                // Each entry describes an intersection change for one observed
                // target element:
                //   entry.boundingClientRect
                //   entry.intersectionRatio
                //   entry.intersectionRect
                //   entry.isIntersecting
                //   entry.rootBounds
                //   entry.target
                //   entry.time
            });
        };

        let observer = new IntersectionObserver(callback, options);
        observer.observe(ref.current.querySelectorAll('li')[0]);
        observer.observe(ref.current.querySelectorAll('li')[1]);


    }, [])
    return (
        <div className="external-wrapper">
            <footer>Kakaslides Copyright 2023</footer>
            <div className="sticker-box" >
                <ul ref={ref} >
                    <li>
                        <a href="https://ko-fi.com/mixopixo#paypalModal" target="_blank"><img src={Kofi} alt="" /> <span> Commision / Support</span></a>
                    </li>
                    <li>
                        <a href="https://github.com/branlok/kakaslides/tree/remake" target="_blank"><img src={Github} alt="" /> <span> See Code </span></a>
                    </li>
                </ul>
            </div>
        </div >
    )
}




export default index