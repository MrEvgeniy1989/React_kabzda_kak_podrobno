import React, {useState} from 'react';
import s from './UncontrolledOnOff.module.css'

export type UncontrolledOnOffPropsType = {
    // onOffValue: boolean
    onChange: (on: boolean) => void
    defaultOn?: boolean
}

export function UncontrolledOnOff(props: UncontrolledOnOffPropsType) {

    const [on, setOn] = useState(props.defaultOn ? props.defaultOn : false)

    let onStyle, offStyle, indicatorStyle
    if (on) {
        onStyle = s.on
        indicatorStyle = s.indicatorStyleOn
    } else {
        offStyle = s.off
        indicatorStyle = s.indicatorStyleOff
    }

    const onClicked = () => {
            setOn(true)
            props.onChange(true)
    }

    const offClicked = () => {
        setOn(false)
        props.onChange(false)
    }

    return (
        <div className={s.onOff}>
            <div className={onStyle} onClick={onClicked}>On
            </div>
            <div className={offStyle} onClick={offClicked}>Off
            </div>
            <div className={indicatorStyle}></div>
        </div>
    )
}