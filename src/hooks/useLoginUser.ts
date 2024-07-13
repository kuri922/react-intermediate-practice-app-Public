import { useContext } from "react"

import { LoginUserContext, LoginUserContexctType } from "../providers/LoginUserProvider"

export const useLoginUser = (): LoginUserContexctType => useContext(LoginUserContext)