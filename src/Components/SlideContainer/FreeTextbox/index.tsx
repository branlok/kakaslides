import React, { useEffect } from 'react'
import './styles.css';
type Props = {}

function Index({ }: Props) {
    let [pos, setPos] = React.useState([100, 100]);
    let ref = React.useRef(null);

    React.useEffect(() => {
        const onmousedown = function (event) {
            let shiftX = event.clientX - ref.current.getBoundingClientRect().left;
            let shiftY = event.clientY - ref.current.getBoundingClientRect().top;

            ref.current.style.position = 'absolute';
            ref.current.style.zIndex = 1000;
            document.body.append(ref.current);

            moveAt(event.pageX, event.pageY);

            // moves the ref.current at (pageX, pageY) coordinates
            // taking initial shifts into account
            function moveAt(pageX, pageY) {
                ref.current.style.left = pageX - shiftX + 'px';
                ref.current.style.top = pageY - shiftY + 'px';
            }

            function onMouseMove(event) {
                moveAt(event.pageX, event.pageY);
            }

            // move the ref.current on mousemove
            document.addEventListener('mousemove', onMouseMove);

            // drop the ref.current, remove unneeded handlers
            ref.current.onmouseup = function () {
                document.removeEventListener('mousemove', onMouseMove);
                ref.current.onmouseup = null;
            };
        };
        const ondragstart = function () {
            return false;
        };

        ref.current.addEventListener('mousedown', onmousedown);
        ref.current.addEventListener('ondragstart', ondragstart);
        return () => {
            ref.current.removeEventListener('ondragstart', ondragstart);
            ref.current.removeEventListener('mousedown', onmousedown);
        }

    }, [])

    return (
        <div ref={ref} className="free-float">hello</div>
    )
}

export default Index