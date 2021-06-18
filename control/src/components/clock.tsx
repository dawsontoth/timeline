import React, { useEffect, useState } from "react";
import "./clock.scss";

export function Clock() {
  const [time, setTime] = useState("");

  useEffect(() => {
    const timer = setInterval(() => {
      const now = new Date();
      setTime(now.toLocaleTimeString());
    }, 1000 / 60);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <div className="clock">
      { time }
    </div>
  );
}
