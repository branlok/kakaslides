import React from 'react'
import TextContainer from '../../SlideContainer/TextContainer'

type Props = {}

function IdentityLayout({ }: Props) {

    return (
        <>
            <TextContainer defaultText={"〈物語〉"} defaultTextLayout={"vertical"} defaultSize={"md"} />
            <div className="bottom-text">
                <TextContainer defaultText={"⏶"} defaultSize="sm" />
                <TextContainer defaultText={"4K09"} defaultSize="xxs" />
            </div>
        </>
    )
}

export default IdentityLayout