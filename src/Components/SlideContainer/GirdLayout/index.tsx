import React from 'react'
import './styles.css'
import TextBox from './TextBox'

type Props = {}

function index({ }: Props) {
    return (
        <div className="grid-layout">
            <div className="left-column">hello</div>
            <div className="center-column">
                <header>123</header>
                <div className="main">
                    <TextBox defaultSize='md' defaultText='赤 齣'/>
                    <TextBox defaultSize='xs' defaultText='aka.'/>
                    <TextBox defaultSize='xxs' defaultText='(135)'/>

                </div>
                <footer>footer</footer>
            </div>
            <div className="right-column">hello</div>
        </div>
    )
}

export default index