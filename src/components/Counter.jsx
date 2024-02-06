//Iteration 2 | Counter

// HERE we import the useState
import { useState } from "react";


function Counter() {
    // create the state variable
    const [count, setCount] = useState(0);

    return (
        <div className="counter">
            <button onClick={() => { count > 0 && setCount(count - 1) }} >
                ➖
            </button>
            <span> {count} </span>
            <button onClick={() => { setCount(count + 1) }} >                       
                ➕
            </button>

        </div>
    )
}

export default Counter;