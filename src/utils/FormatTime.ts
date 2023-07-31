function AddZeroForTime(time: number): string {
  return time < 10 && time >= 0 ? "0" + String(time) : String(time);
}

function FormatTime(time: number): string {
  let strTime: string = "";
  let index: number = 0;
  const arr: number[] = [60, 60, 24];
  const res: number[] = [];

  while (time > 0 && index < arr.length) {
    let value = time % arr[index];
    time = Math.floor(time / arr[index]);
    res.push(value);
    index++;
  }

  if (res.length <= 1) {
    strTime = `00:${AddZeroForTime(res[0])}`;
  } else {
    let i: number = 0;
    while (i < res.length) {
      strTime = AddZeroForTime(res[i]) + strTime;
      if (i !== res.length - 1) {
        strTime = ":" + strTime;
      }
      ++i;
    }
  }

  return strTime;
}

export default FormatTime;
