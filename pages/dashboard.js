
import { jsx, Button } from 'theme-ui'
import { useState } from 'react'
import HookCounter from '../components/HookCounter'
import FullCounter from '../components/FullCounter'


const states = []


export default function Dashboard() {


    const [minutes, setMinutes] = useState(10)
    const [error, setError] = useState(null)
    const handleSubtract = () => {

        if (minutes > 1) {
            setMinutes(minutes -1)
        } else {
            setError("Greater than 0 plz 😠")
        }
    }
    const handleAdd = () => {
        setMinutes(minutes + 1)
        setError(null)
    }
    return( 
    
    <>
        <h1>Dashboard Page!</h1>
        <h2 className="p-4 shadow rounded bg-white">ddddd</h2>

        <br/>

        <button className="border border-red" onClick={handleSubtract}>-</button>

        <div>{ minutes }</div>

        <button onClick={handleAdd}>+</button>

        <div>
            {error && <p>{error}</p>}
        </div>

        <HookCounter></HookCounter>
        <br/>
        <br/>
        <FullCounter></FullCounter>


    </>
    )
}