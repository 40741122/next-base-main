import { createContext, useContext, useState } from 'react'

//1.建立與導出
export const AuthContext = createContext()

//協助全站(_app.js)裡套用Provider的元件，集中要使用的狀態

export function AuthProvider({ children }) {
  //共享用狀態(state)
  const initAuth = {
    isAuth: false,
    userData: {
      id: 0,
      username: '',
    },
  }

  const [auth, setAuth] = useState(initAuth)

  const login = () => {
    setAuth({
      isAuth: true,
      userData: {
        id: 5566,
        username: 'QCX',
      },
    })
  }

  const logout = () => {
    setAuth(initAuth)
  }

  return (
    <AuthContext.Provider value={{ auth, login, logout }}>
      {children}
    </AuthContext.Provider>
  )
}

//給消費者們，包裝好專用於此context的鉤子名稱
export const useAuth = () => useContext(AuthContext)
