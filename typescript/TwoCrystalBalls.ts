export default function two_crystal_balls(breaks: boolean[]): number {
  const jump = Math.floor(Math.sqrt(breaks.length));

  let i = jump;

  for (; i < breaks.length; i += jump) {
    if (breaks[i]) {
      break;
    }
  }

  i = i - jump;

  for (let j = i; j < jump && i < breaks.length; j++) {
    if (breaks[j]) {
      return j;
    }
  }


  return -1;
}
