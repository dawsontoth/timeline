import React from "react";
import "./controls.scss";

export function Controls() {
  return (
    <div className="controls" onClick={ () => window.location.reload() }>
      <button>Reset</button>
    </div>
  );
}
