/**
 * 用户详情 Model
 */
export default class UserInfoModel {
  // 用户 Id
  userId: string | number

  // 用户名称
  userName: string

  // 用户真实姓名
  realName: string

  // 用户简介
  desc?: string

  constructor(_: UserInfoModel) {
    const { userId, userName, realName, desc } = { ..._ }
    this.userId = userId
    this.userName = userName
    this.realName = realName
    this.desc = desc
  }
}
