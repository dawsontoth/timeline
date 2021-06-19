import React, { useCallback, useEffect, useState } from "react";
import { IItem } from "./items";

export function Item({ item }: { item: IItem }) {
  const [delta, setDelta] = useState<number | null>(null);
  const [completed, setCompleted] = useState(false);

  const complete = useCallback(() => {
    const nowCompleted = !completed;
    setCompleted(nowCompleted);
    item.completedAt = nowCompleted ? Date.now() : undefined;
    item.completed = nowCompleted;
  }, [item, completed, setCompleted]);

  useEffect(() => {
    item.tick = () => {
      if (item.completed) {
        return setDelta(null);
      }
      if (item.atMinutes) {
        return setDelta(atMinutesToDiff(item.atMinutes));
      }
      if (item.afterMinutes !== undefined && item.relativeTo?.completed) {
        // if (item.relativeTo.atMinutes) {
        //   return setDelta(atMinutesToDiff(item.relativeTo.atMinutes - item.afterMinutes));
        // }
        if (item.relativeTo.completedAt) {
          return setDelta(Date.now() - item.relativeTo.completedAt - item.afterMinutes * 60 * 1000);
        }
      }
      return setDelta(null);
    };
  }, [item, setDelta]);

  return (
    <li
      className={ "item"
      + (delta !== null && delta > 0 ? " late" : "")
      + (completed ? " completed" : "")
      }
      onClick={ complete }
    >
      <div className="item-status">
        { completed && <i className="fal fa-check-circle" /> }
        { formatMilliseconds(delta) }
      </div>
      <div className="message"
           dangerouslySetInnerHTML={ { __html: item.message } } />
    </li>
  );
}

function atMinutesToDiff(atMinutes: number): number {
  const now = new Date();
  const atDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), atMinutes, 0, 0);
  return now.getTime() - atDate.getTime();
}

function formatMilliseconds(ms: null | number): string | undefined {
  if (ms === null) {
    return undefined;
  }
  const sign = ms < 0 ? "T-" : "T+";
  ms = Math.abs(ms);
  const frames = String(Math.floor((ms % 1000) / (1000 / 30))).padStart(2, "0");
  const seconds = String(Math.floor((ms / 1000) % 60)).padStart(2, "0");
  const minutes = String(Math.floor((ms / 1000 / 60) % 60)).padStart(2, "0");
  return `${ sign }${ minutes }:${ seconds }:${ frames }`;
}
