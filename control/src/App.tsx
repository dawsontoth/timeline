import React from "react";
import { Clock } from "./components/clock";
import { Controls } from "./components/controls";
import { Timeline } from "./components/timeline";

export function App() {
  return (
    <div className="App">
      <Clock />
      <Controls />
      <Timeline />
    </div>
  );
}

