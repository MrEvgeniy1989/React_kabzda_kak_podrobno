import React, {ChangeEvent, useRef, useState} from 'react';

export default {
    title: 'input',
    // component: Button,
}

export const UncontrolledInput = () => <input/>
export const TrackValueOfUncontrolledInput = () => {
    const [value, setValue] = useState('')

    const onChange = (event: ChangeEvent<HTMLInputElement>) => {
        const actualValue = event.currentTarget.value
        setValue(actualValue)
    }

    return <><input onChange={onChange}/> - {value}</>
}
export const GetValueOfUncontrolledInputByButtonPress = () => {
    const [value, setValue] = useState('')
    const inputRef = useRef<HTMLInputElement>(null)

    const save = ()=>{
        const el = inputRef.current as HTMLInputElement
        setValue(el.value)
        // if (inputRef.current) {
        //     setValue(inputRef.current.value)
        // }
    }

    return <><input ref={inputRef} id={'inputId'}/> <button onClick={save}>Save</button> Actual value: {value}</>
}

export const ControlledInput = () => <input value={'it'}/>