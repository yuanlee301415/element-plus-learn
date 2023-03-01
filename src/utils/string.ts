export function padEnd(
  str: string,
  pad: string,
  precision: number = 0
): string {
  if (str === void 0) return str;
  if (typeof str !== "string" || typeof precision !== "number" || precision < 0)
    return str;

  const diff = precision - str.length;
  if (diff < 0) return str.slice(0, precision);

  if (typeof pad !== "string") return str;
  return str + new Array(diff + 1).join(pad);
}
