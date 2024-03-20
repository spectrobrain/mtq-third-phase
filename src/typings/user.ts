export type ChatborUserType = {
  token: string
  email: string
  user_id: string
}

export type QuotaUserType = {
  username: string
  access_token: string
  expires: number
  showTutorial: boolean
}

export type UserDataType = ChatborUserType & QuotaUserType
