import type UserInfoModel from "@/models/UserInfoModel";

import request from "@/utils/http/axios";

export enum UserApi {
  GetUserInfo = "user/1003",
}

export function getUserInfo(): Promise<UserInfoModel> {
  return request({
    method: "get",
    url: UserApi.GetUserInfo,
  });
}
