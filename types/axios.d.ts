export interface Result<T = any> {
  code: number;
  data: T;
  message?: string;
}
