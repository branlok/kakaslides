import React, { useState } from 'react'
type Props = {}

function index({ images, onClick }: Props) {
    let [startEnd, setStartEnd] = useState([0, 5]);
    // let [visibleChoices, setVisibleChoices] = useState(images.slice(...startEnd));
    let visibleChoices = images.slice(startEnd[0], startEnd[1] < startEnd[0] ? undefined : startEnd[1]);
    if (visibleChoices.length < 5) {
        visibleChoices = [...visibleChoices, ...images.slice(0, startEnd[1])]

    }


    const handleShift = (e) => {
        setStartEnd(prev => [(prev[0] + 5) % images.length, (prev[1] + 5) % images.length]);
    }

    
    return (
        <>
            <p>or pick from our storage  <span><u onClick={handleShift}>shuffle</u></span></p>

            <div>{visibleChoices.map((item, idx) => {
                return <img onClick={onClick} src={item} key={item} />
            })}</div></>
    )
}

export default index