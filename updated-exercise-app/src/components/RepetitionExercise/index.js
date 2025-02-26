import React, { useState } from "react";
import "../../App.css";

function RepetitionExercise({ name }) {
    const [repCount, setRepCount] = useState(0);

    return (
        <div className="exercise-container">
            <h1>{name}</h1>
            <h2>REPS:</h2>
            <h3>{repCount}</h3>
            <button onClick={() => setRepCount(repCount + 1)} className="action-button">
                Complete Rep
            </button>
            <button onClick={() => setRepCount(0)} className="action-button">
                Reset
            </button>
        </div>
    );
}

export default RepetitionExercise;