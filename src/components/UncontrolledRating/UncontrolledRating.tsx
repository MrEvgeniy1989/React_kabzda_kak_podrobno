import React, {useState} from 'react';

type UncontrolledRatingPropsType = {
    // value: 0 | 1 | 2 | 3 | 4 | 5;
}

// type ValueType = {
//     value: 0 | 1 | 2 | 3 | 4 | 5;
// }

export function UncontrolledRating(props: UncontrolledRatingPropsType) {

    const [value, setValue] = useState<any>(0)

    const callBackHandler = (value: number) => {
      return setValue(value)
    }

    return (
        <div>
            <Star selected={value > 0} callBack = {() => callBackHandler(1)}/>
            <Star selected={value > 1} callBack = {() => callBackHandler(2)}/>
            <Star selected={value > 2} callBack = {() => callBackHandler(3)}/>
            <Star selected={value > 3} callBack = {() => callBackHandler(4)}/>
            <Star selected={value > 4} callBack = {() => callBackHandler(5)}/>
        </div>
    );
}

type StarPropsType = {
    selected: boolean;
    callBack: () => void
}

function Star(props: StarPropsType) {

    return props.selected ? <span onClick={props.callBack}><b>star</b> </span> : <span  onClick={props.callBack}>star </span>
}