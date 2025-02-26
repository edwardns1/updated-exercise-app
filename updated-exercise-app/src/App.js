import React, { useState } from "react";
import RepetitionExercise from "./components/RepetitionExercise";
import DurationExercise from "./components/DurationExercise";
import StretchingExercise from "./components/StretchingExercise";
import './App.css';

function App() {
  const [currentExercise, setCurrentExercise] = useState(null);

  const exercises = [
    { name: "PUSH UPS", type: "repetition" },
    { name: "BICYCLING", type: "duration" },
    { name: "JUMPING JACKS", type: "repetition" },
    { name: "RUNNING", type: "duration" },
    { name: "SIT UPS", type: "repetition" },
    { name: "STRETCHING", type: "stretching" },
  ];

  let defaultReturn = (
    <div>
      <h1>EXERCISES</h1>
      {exercises.map((exercise, index) => (
        <button
          key={index}
          onClick={() => setCurrentExercise(exercise)}
          className="exercise-button"
        >
          {exercise.name}
        </button>
      ))}
    </div>
  );

  if (currentExercise) {
    if (currentExercise.type === "repetition") {
      defaultReturn = <RepetitionExercise name={currentExercise.name} />;
    } else if (currentExercise.type === "duration") {
      defaultReturn = <DurationExercise name={currentExercise.name} />;
    } else {
      defaultReturn = <StretchingExercise name={currentExercise.name} />;
    }
  }

  return <div className="container">{defaultReturn}</div>;
}

export default App;
