export function atMinutesToDiff(atMinutes: number): number {
  const now = new Date();
  const atDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), now.getHours(), atMinutes, 0, 0);
  return now.getTime() - atDate.getTime();
}

export function formatMilliseconds(ms: null | number): string | undefined {
  if (ms === null) {
    return undefined;
  }
  const sign = ms < 0 ? 'T-' : 'T+';
  ms = Math.abs(ms);
  const frames = String(Math.floor((ms % 1000) / (1000 / 30))).padStart(2, '0');
  const seconds = String(Math.floor((ms / 1000) % 60)).padStart(2, '0');
  const minutes = String(Math.floor((ms / 1000 / 60) % 60)).padStart(2, '0');
  return `${ sign }${ minutes }:${ seconds }:${ frames }`;
}
