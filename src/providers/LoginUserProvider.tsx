
import { createContext, Dispatch, ReactNode, SetStateAction, useState } from "react"
import { User } from "../types/user";

type LoginUser = User & { isAdmin: boolean } | null;

export type LoginUserContexctType = {
  loginUser: LoginUser;
  setLoginUser: Dispatch<SetStateAction<LoginUser | null>>
}

export const LoginUserContext = createContext<LoginUserContexctType>({} as LoginUserContexctType);

export const LoginUserProvider = (props: { children: ReactNode }) => {

  const { children } = props;
  const [loginUser, setLoginUser] = useState<LoginUser | null>(null);
  return (
    <LoginUserContext.Provider value={{ loginUser, setLoginUser }}>
      {children}
    </LoginUserContext.Provider>
  )
}


