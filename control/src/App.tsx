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

// Clock
// Advancing timeline
// Countdown to next event
// Observe Livestream Studio through remote API
// Control Livestream Studio through remote API
