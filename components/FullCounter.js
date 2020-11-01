import { useState } from 'react'

export default function FullCounter() {

    const initialCount = 0 
    const [count, setCount] = useState(initialCount) 




    return (
        <div>

            <div style={{'font-size': 25, 'color': 'red'}}>Count: {count}</div>
            <br/>
            <br/>
            <button onClick={() => setCount(initialCount)}>Reset</button>
            <button onClick={() => setCount(count+1)}>Increment</button>
            <button onClick={() => setCount(count-1)}>Decrement</button>
            <button onClick={() => setCount(count + 5)}>Increment By 5</button>
            
        </div>
    )
}

