export function atTimeToDiff(atTime: number): number {
  const hour = atTime / 100 | 0;
  const minutes = atTime % 100;
  const now = new Date();
  const atDate = new Date(now.getFullYear(), now.getMonth(), now.getDate(), hour, minutes, 0, 0);
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
