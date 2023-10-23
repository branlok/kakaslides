import React from 'react'
import "./styles.css"
function debounce(fn, ms) {

    let timer;
    return () => {
        clearTimeout(timer)
        timer = setTimeout(() => {
            timer = null
            fn.apply(this, arguments)
        }, ms)

    };

}


function ShowWindowSize({ }: Props) {
    const [dimensions, setDimensions] = React.useState({
        height: window.innerHeight,
        width: window.innerWidth

    })

    React.useEffect(() => {
        const debouncedHandleResize = debounce(function handleResize() {
            setDimensions({
                height: window.innerHeight,
                width: window.innerWidth
            })
        }, 5)

        window.addEventListener('resize', debouncedHandleResize);
        return () => {
            window.removeEventListener('resize', debouncedHandleResize)
        }
    })

    return <div className='dimension-reader'> <span>{dimensions.width} </span> <span>{dimensions.height}</span></div>
}

export default ShowWindowSize