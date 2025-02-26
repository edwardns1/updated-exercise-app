import React, { useState, useEffect } from "react";
import "../../App.css";

function StretchingExercise({ name }) {
    const [time, setTime] = useState(0);
    const [timerRunning, setTimerRunning] = useState(false);
    const [inputMinutes, setInputMinutes] = useState("");

    useEffect(() => {
        let timer;
        if (timerRunning && time > 0) {
            timer = setInterval(() => {
                setTime((prevTime) => prevTime - 1);
            }, 1000);
        } else if (time === 0) {
            setTimerRunning(false);
        }
        return () => clearInterval(timer);
    }, [timerRunning, time]);

    const formatTime = (seconds) => {
        const minutes = String(Math.floor(seconds / 60)).padStart(2, "0");
        const secs = String(seconds % 60).padStart(2, "0");
        return `${minutes}:${secs}`;
    };

    const startTimer = () => {
        if (inputMinutes > 0) {
            setTime(inputMinutes * 60);
            setTimerRunning(true);
            setInputMinutes("");
        }
    };

    const stopAndResetTimer = () => {
        setTimerRunning(false);
        setTime(0);
    };

    return (
        <div className="exercise-container">
            <h1>{name}</h1>
            <h2>Stretching Time:</h2>
            <h3>{formatTime(time)}</h3>
            {!timerRunning ? (
                <div>
                    <input
                        type="number"
                        placeholder="Minutes"
                        value={inputMinutes}
                        onChange={(e) => setInputMinutes(e.target.value)}
                        className="time-input"
                    />
                    <button onClick={startTimer} className="action-button">
                        Start
                    </button>
                </div>
            ) : (
                <button onClick={stopAndResetTimer} className="action-button">
                    Stop
                </button>
            )}
        </div>
    );
}

export default StretchingExercise;
