import React, {useState} from 'react';
import s from './OnOff.module.css'

export type OnOffPropsType = {
    // onOffValue: boolean
    value: boolean
    onClick: (onOffValue: boolean) => void
}

export function OnOff(props: OnOffPropsType) {

    let onStyle, offStyle, indicatorStyle
    if (props.value) {
        onStyle = s.on
        indicatorStyle = s.indicatorStyleOn
    } else {
        offStyle = s.off
        indicatorStyle = s.indicatorStyleOff
    }

    return (
        <div className={s.onOff}>
            <div className={onStyle} onClick={() => props.onClick(true)}>On</div>
            <div className={offStyle} onClick={() => props.onClick(false)}>Off</div>
            <div className={indicatorStyle}></div>
        </div>
    )
}