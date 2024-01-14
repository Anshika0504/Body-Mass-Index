import React, { useState } from "react";
import "./App.css";

function App() {
  const [weight, setWeight] = useState(0);
  const [height, setHeight] = useState(0);
  const [bmi, setBmi] = useState("");
  const [message, setMessage] = useState("");

  // Logic
  let calcBmi = (e) => {
    e.preventDefault();

    if (weight === 0 || height === 0) {
      alert("Please enter valid weight and height");
    } else {
      let calculatedBmi = (weight / (height * height) * 703).toFixed(1);
      setBmi(calculatedBmi);

      if (calculatedBmi < 25) {
        setMessage("You are underweight");
      } else if (calculatedBmi >= 25 && calculatedBmi < 30) {
        setMessage("You are healthy");
      } else {
        setMessage("You are overweight");
      }
    }
  };

  // Reload
  let reload = () => {
    window.location.reload();
  };

  return (
    <div className="App">
      <div className="container">
        <h2>Body Mass Index Calculator</h2>
        <form action="" onSubmit={calcBmi}>
          <div>
            <label>Weight(lbs)</label>
            <input
              type="text"
              placeholder="Enter your weight"
              value={weight}
              onChange={(e) => setWeight(e.target.value)}
            />
          </div>
          <div>
            <label htmlFor="">Height(in cm)</label>
            <input
              type="text"
              placeholder="Enter your height"
              value={height}
              onChange={(e) => setHeight(e.target.value)}
            />
          </div>
          <div>
            <button className="btn" type="submit">
              Submit
            </button>
            <button className="btn btn-outline" onClick={reload} type="button">
              Reload
            </button>
          </div>
          <div className="center">
            <h3>Your BMI is: {bmi}</h3>
            <p>{message}</p>
          </div>
        </form>
      </div>
    </div>
  );
}

export default App;
