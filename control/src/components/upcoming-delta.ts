import { useEffect, useState } from 'react';
import { useItems } from './items';

export function useUpcomingDelta() {
  const { data: items } = useItems();
  const [delta, setDelta] = useState<string>();
  const [late, setLate] = useState<boolean>();

  useEffect(() => {
    const timer = setInterval(findFirstLateItem, 1000 / 60);

    function findFirstLateItem() {
      const upcomingItem = items?.find(item => item.delta);
      setDelta(upcomingItem?.delta);
      setLate(upcomingItem?.late);
    }

    return () => {
      clearInterval(timer);
    };
  }, [items]);

  return { delta, late };
}
