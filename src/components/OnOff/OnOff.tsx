import React from 'react';
import s from './OnOff.module.css'

export type onOffPropsType = {
    onOffValue: boolean
}

export function OnOff(props: onOffPropsType) {
    let switch1, switch2;
    if (props.onOffValue) {
        switch1 = s.on
        switch2 = s.off
    } else {
        switch1 = s.off
        switch2 = s.on
    }

    return (
        <div className={s.onOff}>
            <div className={switch1}>On</div>
            <div className={switch2}>Off</div>
        </div>
    )
}