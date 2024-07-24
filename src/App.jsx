import React from "react";
import { Chart as ChartJS, ArcElement, Tooltip, Legend } from "chart.js";
import { Doughnut } from "react-chartjs-2";
ChartJS.register(ArcElement, Tooltip, Legend);
import "./App.css";

const App = () => {
  const data = {
    labels: ["Published", "Not Published"],
    datasets: [
      {
        label: "Blog",
        data: [6, 3],
        backgroundColor: ["green", "red"],
        borderColor: ["green", "red"],
      },
    ],
  };
  const options = {};
  return (
    <div className="App">
      <h1 className="App-header">React ChartJS charts.</h1>
      <Doughnut data={data} options={options}></Doughnut>
    </div>
  );
};

export default App;
