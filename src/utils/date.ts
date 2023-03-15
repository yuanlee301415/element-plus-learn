const enum FORMAT_DATE_TYPE {
  ONLY_TIME,
  ONLY_DATE,
  DATE_TIME,
}

export function formatDate(
  value: Date | number | string,
  type: FORMAT_DATE_TYPE = FORMAT_DATE_TYPE.ONLY_DATE,
  dateSeparator: string = "/",
  timeSeparator: string = ":",
  stringSeparator: string = " ",
  pad: string = "0",
  nil: string = ""
): string {
  value = new Date(value);
  if (!value.getTime?.()) return nil;

  const year = value.getFullYear();
  const [month, date, hour, min, sec] = [
    value.getMonth() + 1,
    value.getDate(),
    value.getHours(),
    value.getMinutes(),
    value.getSeconds(),
  ].map((_) => (pad + _).slice(-2));

  switch (type) {
    case FORMAT_DATE_TYPE.ONLY_TIME:
      return [hour, min, sec].join(timeSeparator);
    case FORMAT_DATE_TYPE.ONLY_DATE:
      return [year, month, date].join(dateSeparator);
    default:
      return [
        [year, month, date].join(dateSeparator),
        [hour, min, sec].join(timeSeparator),
      ].join(stringSeparator);
  }
}
formatDate.FORMAT_DATE_TYPE__ONLY_TIME = FORMAT_DATE_TYPE.ONLY_TIME;
formatDate.FORMAT_DATE_TYPE__ONLY_DATE = FORMAT_DATE_TYPE.ONLY_DATE;
formatDate.FORMAT_DATE_TYPE__DATE_TIME = FORMAT_DATE_TYPE.DATE_TIME;

export function countdown(msecs: number): string {
  const SEC = 1000;
  const MIN = SEC * 60;
  const HOUR = MIN * 60;
  const DAY = HOUR * 24;
  const UNITS = [DAY, HOUR, MIN, SEC];

  const ret = (function countdownIIFE(diff, idx, ret: number[] = []) {
    const unit = UNITS[idx];
    if (!unit) return ret;

    const val = diff / unit;
    ret.push(val > 1 ? Math.floor(val) : 0);
    diff %= unit;
    idx++;
    countdownIIFE(diff, idx, ret);
    return ret;
  })(msecs, 0, []);

  return ret.map((_) => (_ < 10 ? "0" + _ : _)).join(":");
}
