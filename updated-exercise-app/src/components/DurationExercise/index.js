import React, { useState, useEffect } from "react";
import "../../App.css";

function DurationExercise({ name }) {
    const [time, setTime] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);

    useEffect(() => {
        let timer;
        if (timerRunning) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime + 1);
            }, 1000);
        }
        return () => clearInterval(timer);
    }, [timerRunning]);

    const formatTime = (seconds) => {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
        const secs = String(seconds % 60).padStart(2, "0");
        return `${minutes}:${secs}`;
    };

    const startTimer = () => {
        setTimerRunning(true);
    };

    const resetTimer = () => {
        setTimerRunning(false);
        setTime(0);
    };

    return (
        <div className="exercise-container">
            <h1>{name}</h1>
            <h2>Timer:</h2>
            <h3>{formatTime(time)}</h3>
            {!timerRunning ? (
                <button onClick={startTimer} className="action-button">
                    Start
                </button>
            ) : (
                <button onClick={resetTimer} className="action-button">
                    Reset
                </button>
            )}
        </div>
    );
}

export default DurationExercise;