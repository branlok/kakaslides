import React from 'react'
import classes from "./styles.module.css";
import TextAlignment from '../TextAlignment';
type Props = {}

function index({ }: Props) {
    return (
        <div className={classes.wrapper}>
            <TextAlignment defaultValue={'center'} onClick={undefined} />
            {/* <div>Color</div> */}
        </div>
    )
}

export default index