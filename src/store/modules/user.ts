import { defineStore } from "pinia";

import { store } from "@/store";
import UserInfoModel from "@/models/UserInfoModel";
import { getUserInfo } from "@/api/sys/user";

interface UserState {
  userInfo: Nullable<UserInfoModel>;
  token?: string;
  lastUpdateTime?: number;
}

export const useUserStore = defineStore({
  id: "user",
  state: (): UserState => ({
    userInfo:
      import.meta.env.VITE_PERMISSION &&
      JSON.parse(import.meta.env.VITE_PERMISSION)
        ? null
        : new UserInfoModel({ userId: 0, userName: "Guest", realName: "游客" }),
    token: undefined,
    lastUpdateTime: undefined,
  }),

  getters: {
    getUserInfo(): UserInfoModel {
      return this.userInfo ?? (Object.create(null) as UserInfoModel);
    },
  },

  actions: {
    setUserInfo(userInfo: UserInfoModel | null) {
      this.userInfo = userInfo;
      this.lastUpdateTime = Date.now();
    },

    async getUserInfoAction() {
      const data = new UserInfoModel(await getUserInfo());
      console.log("getUserInfoAction>data:", data);
      this.setUserInfo(data);
      return data;
    },
  },
});

export function useUserStoreWithOut() {
  return useUserStore(store);
}
