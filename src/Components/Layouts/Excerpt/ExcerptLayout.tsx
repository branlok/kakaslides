import React from 'react'
import TextContainer from '../../SlideContainer/TextContainer'

type Props = {}

function IdentityLayout({ }: Props) {

    return (
        <>
            <TextContainer defaultText={"〈物語〉"} alignText={"left"} defaultSize={"xs"} />
            <div className="bottom-text">
                <TextContainer defaultText={"⏶"} defaultSize="sm" />
                <TextContainer defaultText={"4K09"} defaultSize="xxs" />
            </div>
        </>
    )
}

export default IdentityLayout