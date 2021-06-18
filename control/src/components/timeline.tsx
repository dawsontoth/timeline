import React, { useEffect } from "react";
import { Item } from "./item";
import { items } from "./items";
import "./timeline.scss";

export function Timeline() {
  useEffect(() => {
    const timer = setInterval(() => {
      items.forEach(item => {
        item.tick?.();
      });
    }, 1000 / 60);
    return () => {
      clearInterval(timer);
    };
  }, []);

  return (
    <ul className="timeline">
      { items.map((item, index) => (
        <Item item={ item } key={ index } />
      )) }
    </ul>
  );
}
