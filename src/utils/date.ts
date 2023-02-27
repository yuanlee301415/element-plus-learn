const ONLY_TIME = 0;
const ONLY_DATE = 1;
const DATE_TIME = 2;

export type FORMAT_DATE_TYPE =
  | typeof ONLY_TIME
  | typeof ONLY_DATE
  | typeof DATE_TIME;

export function formatDate(
  value: Date,
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
    value.getMonth(),
    value.getSeconds(),
  ];

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
