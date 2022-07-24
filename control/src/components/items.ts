import { useQuery } from 'react-query';
import { atTimeToDiff, formatMilliseconds } from './time';

export interface IItem {
  message: string;
  image?: string;
  atTime?: number;
  afterMinutes?: number;

  late?: boolean;
  delta?: string;

  completed?: boolean;
  completedAt?: number;

  relativeToIndex?: number;
  relativeTo?: IItem;

  toggleCompleted: () => void;
  updated: Array<() => void>;
}

export function useItems() {
  return useQuery<IItem[], Error>('timeline-items', async () => {
    const res = await fetch('/timeline/events.json');
    const items: IItem[] = await res.json();

    for (let i = 0; i < items.length; i++) {
      const item = items[i];
      item.completed = false;
      item.updated = [];
      item.toggleCompleted = () => {
        item.completed = !item.completed;
        item.completedAt = item.completed ? Date.now() : undefined;
        item.updated.forEach(updated => updated());
      };
      if (item.relativeToIndex !== undefined) {
        item.relativeTo = items[i + item.relativeToIndex];
      }
    }

    setInterval(updateItems, 1000 / 60);

    function updateItems() {
      for (const item of items) {
        item.late = false;
        item.delta = undefined;

        if (item.completed) {
        } else if (item.atTime) {
          const diff = atTimeToDiff(item.atTime);
          item.late = diff > 0;
          item.delta = formatMilliseconds(diff);
        } else if (item.afterMinutes !== undefined && item.relativeTo?.completed) {
          if (item.relativeTo.completedAt) {
            const diff = Date.now() - item.relativeTo.completedAt - item.afterMinutes * 60 * 1000;
            item.late = diff > 0;
            item.delta = formatMilliseconds(diff);
          }
        }
        item.updated.forEach(updated => updated());
      }
    }

    return items;
  }, { staleTime: Infinity });
}
