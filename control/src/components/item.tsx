import React, { MouseEvent, useEffect, useState } from 'react';
import { IItem } from './items';

export function Item({ item }: { item: IItem }) {
  const [delta, setDelta] = useState<string>();
  const [late, setLate] = useState<boolean>();
  const [completed, setCompleted] = useState<boolean>();

  useEffect(() => {
    const updated = () => {
      setDelta(item.delta);
      setLate(item.late);
      setCompleted(item.completed);
    };
    item.updated.push(updated);
    return () => {
      const index = item.updated.indexOf(updated);
      if (index >= 0) {
        item.updated.splice(index, 1);
      }
    };
  }, [item, setDelta, setCompleted]);

  return (
    <li
      className={ 'item'
      + (late ? ' late' : '')
      + (completed ? ' completed' : '')
      }
      onClick={ item.toggleCompleted }
    >
      <div className="item-status">
        { completed
          ? <i className="fal fa-check-circle" />
          : delta
            ? delta
            : item.image
              ? <a
                className="fal fa-question-circle item-image"
                target="_blank"
                rel="noreferrer"
                onClick={ stopPropagation }
                href={ item.image }
              ><span className="sr-only">Help</span></a>
              : undefined
        }
      </div>
      <div className="message"
           dangerouslySetInnerHTML={ { __html: item.message } } />
    </li>
  );
}

function stopPropagation(e: MouseEvent) {
  e.stopPropagation();
}

