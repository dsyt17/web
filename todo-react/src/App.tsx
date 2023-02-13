import React from "react";
import "./App.css";
import { Todolist } from "./Todolist";

const tasks = [
  {
    title: "firstTasks",
    tasks: [
      {
        id: 1,
        title: "CSS",
        idDone: true,
      },
      {
        id: 2,
        title: "Games",
        idDone: false,
      },
      {
        id: 3,
        title: "SGU",
        idDone: true,
      },
    ],
  },
  {
    title: "second something",
    tasks: [
      {
        id: 1,
        title: "sdfsdf",
        idDone: true,
      },
      {
        id: 2,
        title: "dfhj",
        idDone: false,
      },
      {
        id: 3,
        title: "SfghfjGU",
        idDone: true,
      },
      {
        id: 4,
        title: "111",
        idDone: true,
      },
    ],
  },
];

function App() {
  return (
    <div className="App">
      {tasks.map((task) => (
        <Todolist task={task} />
      ))}
    </div>
  );
}

export default App;
