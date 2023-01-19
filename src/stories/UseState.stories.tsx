import React, {useMemo, useState} from 'react';

export default {
    title: 'useState demo',
}

function generateData(){
    return 23423235
}

export const Example1 = () => {
    console.log('Example1')

    // const initValue = useMemo(generateData, [])

    const [counter, setCounter] = useState(generateData)

    return (
        <>
            {/*<button onClick={() => setCounter(counter + 1)}>+</button>*/}
            <button onClick={() => setCounter(state => state + 1)}>+</button>
            {counter}
        </>
    )
}