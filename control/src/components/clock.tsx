import React, { useEffect, useState } from 'react';
import './clock.scss';
import { useUpcomingDelta } from './upcoming-delta';

export function Clock() {
  const [time, setTime] = useState('');
  const { delta, late } = useUpcomingDelta();

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
    <div className={ 'clock' + (late ? ' late' : '') }>
      { delta || time }
    </div>
  );
}
