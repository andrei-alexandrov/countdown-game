import { useState, useRef } from "react";
import ModalPopUp from "../ModalPopUp/ModalPopUp";

import "./TimerChallenge.scss";

export default function TimerChallenge({ title, timer }) {
    const [timeRemaining, setTimeRemaining] = useState(timer * 1000);

    const timerId = useRef();
    const dialogRef = useRef();

    const activeTimer = timeRemaining > 0 && timeRemaining < timer * 1000;

    if (timeRemaining <= 0) {
        clearInterval(timerId.current);
        dialogRef.current.showModal();
    }

    function handleReset() {
        setTimeRemaining(timer * 1000);
    }

    function handleStart() {
        timerId.current = setInterval(() => {
            setTimeRemaining((prevTimeRemaining) => prevTimeRemaining - 10);
        }, 10);
    }

    function handleStop() {
        dialogRef.current.showModal();
        clearInterval(timerId.current);
    }

    return (
        <>
            <ModalPopUp
                ref={dialogRef}
                targetTime={timer}
                remainingTime={timeRemaining}
                onReset={handleReset} />
            <section className="challenge">
                <h2>{title}</h2>
                <p className="challenge-time">{timer} second{timer > 1 ? "s" : ""}</p>
                <button onClick={activeTimer ? handleStop : handleStart}>
                    {activeTimer ? "Stop" : "Start"} challenge</button>
                <p className={activeTimer ? "active" : ""}>
                    {activeTimer ? "Time is running..." : "Timer inactive"}
                </p>
            </section>
        </>
    )
}