import React from 'react';
import { Item } from './item';
import { useItems } from './items';
import './timeline.scss';

export function Timeline() {
  const { isLoading, error, data: items } = useItems();

  if (isLoading) {
    return <ul className="timeline">
      <li className="item">
        <div className="item-status">Loading...</div>
      </li>
    </ul>;
  }

  if (error || !items) {
    return <ul className="timeline">
      <li className="item">
        <div className="item-status">{ error || 'Failed to load items!' }</div>
      </li>
    </ul>;
  }

  return (
    <ul className="timeline">
      { items.map((item, index) => (
        <Item key={ index } item={ item } />
      )) }
    </ul>
  );
}
