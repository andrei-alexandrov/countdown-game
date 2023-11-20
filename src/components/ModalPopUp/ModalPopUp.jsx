import { forwardRef } from "react"
import { createPortal } from "react-dom";

import "./ModalPopUp.scss"

const ModalPopUp = forwardRef(function ModalPopUp({ targetTime, remainingTime, onReset }, ref) {
    const userLost = remainingTime <= 0;
    const remainingTimeFormatter = (remainingTime / 1000).toFixed(2);
    const score = Math.round((1 - remainingTime / (targetTime * 1000)) * 100);

    return createPortal(
        <dialog ref={ref} className="result-modal" onClose={onReset}>
            {userLost ? <h2>You lost!</h2> : <div><h2>You win!</h2> <p>Your score: {score}</p></div>}
            <p>The target time was <strong>{targetTime} seconds</strong> </p>
            <p>You stopped the timer with <strong>{remainingTimeFormatter} seconds left</strong></p>
            <form method="dialog" onSubmit={onReset}>
                <button>Close</button>
            </form>
        </dialog>,
        document.getElementById("modal")
    )
})

export default ModalPopUp;
