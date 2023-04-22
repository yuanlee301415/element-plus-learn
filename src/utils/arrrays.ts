export const ensureArray = <T>(arr: T | T[]): T[] => {
  if (!arr) return []
  return Array.isArray(arr) ? arr : [arr]
}
