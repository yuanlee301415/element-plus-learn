const ONLY_TIME = 0;
const ONLY_DATE = 1;
const DATE_TIME = 2;

export type FORMAT_DATE_TYPE =
  | typeof ONLY_TIME
  | typeof ONLY_DATE
  | typeof DATE_TIME;

export function formatDate(
  value: Date | number | string,
  type: FORMAT_DATE_TYPE = ONLY_DATE,
  separator = "/"
): string {
  value = new Date(value);
  if (!value.getTime?.()) return "";

  const [year, month, date, hour, min, sec] = [
    value.getFullYear(),
    value.getMonth() + 1,
    value.getDate(),
    value.getHours(),
    value.getMinutes(),
    value.getSeconds(),
  ].map((_) => ("0" + _).slice(0, 2));

  switch (type) {
    case 0:
      return [hour, min, sec].join(":");
    case 1:
      return [year, month, date].join(separator);
    default:
      return [
        [year, month, date].join(separator),
        [hour, min, sec].join(":"),
      ].join(" ");
  }
}
formatDate.FORMAT_DATE_TYPE__ONLY_TIME = ONLY_TIME as FORMAT_DATE_TYPE;
formatDate.FORMAT_DATE_TYPE__ONLY_DATE = ONLY_DATE as FORMAT_DATE_TYPE;
formatDate.FORMAT_DATE_TYPE__DATE_TIME = DATE_TIME as FORMAT_DATE_TYPE;

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
