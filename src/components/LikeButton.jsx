//Iteration 1 | LikeButton


import { useState } from "react";
function LikeButton() {
    const [count, setCount] = useState(0);
    return (
        <button onClick={() => { setCount(count + 1) }} >
            {count} I love bacon
        </button>
    )
}

export default LikeButton;