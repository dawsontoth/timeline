import React, { useEffect } from "react";
import { items } from "./items";
import "./timeline.scss";

export function Timeline() {
  useEffect(() => {
    const timer = setInterval(() => {
    }, 1000 / 60);
    return () => {
      clearInterval(timer);
    };
  }, []);

  // TODO: Can check off items.
  // TODO: Calculate active item.
  // TODO: Calculate time to next item.
  return (
    <ul className="timeline">
      { items.map((item, index) => (
        <li className="item" key={ index }>{ item.message }</li>
      )) }
    </ul>
  );
}
