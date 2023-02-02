import type { AxiosResponse } from "axios";
import type { Result } from "#/axios";

import axios from "axios";

const request = axios.create({
  baseURL: import.meta.env.VITE_BASE_API,
  timeout: 1000 * 20,
});

// 添加响应拦截器
request.interceptors.response.use(
  function (response: AxiosResponse<Result>) {
    // 2xx 范围内的状态码都会触发该函数。
    // 对响应数据做点什么
    const data = response.data;
    if (data.code !== 0) {
      throw new Error(data.message ?? "系统异常");
    }
    return data.data;
  },
  function (error) {
    // 超出 2xx 范围的状态码都会触发该函数。
    // 对响应错误做点什么
    // console.error(error);
    return Promise.reject(error);
  }
);

export default request;
