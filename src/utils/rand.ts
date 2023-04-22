export function generateId(digit: number = 6): number {
  return (Math.random() * Math.pow(10, digit)) | 0
}
