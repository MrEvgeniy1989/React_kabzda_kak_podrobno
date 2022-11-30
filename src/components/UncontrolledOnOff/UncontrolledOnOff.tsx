import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

export type UncontrolledOnOffPropsType = {
    // onOffValue: boolean
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    const [on, setOn] = useState(false)

    let onStyle, offStyle, indicatorStyle
    if (on) {
        onStyle = s.on
        indicatorStyle = s.indicatorStyleOn
    } else {
        offStyle = s.off
        indicatorStyle = s.indicatorStyleOff
    }

    return (
        <div className={s.onOff}>
            <div className={onStyle} onClick={() => {
                setOn(true)
            }}>On
            </div>
            <div className={offStyle} onClick={() => {
                setOn(false)
            }}>Off
            </div>
            <div className={indicatorStyle}></div>
        </div>
    )
}