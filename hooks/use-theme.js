import { createContext, useContext, useState } from 'react'

//1.建立與導出
export const ThemeContext = createContext()

//協助全站(_app.js)裡套用Provider的元件，集中要使用的狀態

export function ThemeProvider({ children }) {
  //共享用狀態(state)
  //theme = 'light | 'dark
  const [theme, setTheme] = useState('light')

  const toggleTheme = () => setTheme(theme === 'dark' ? 'light' : 'dark')
  return (
    <ThemeContext.Provider value={{ theme, toggleTheme }}>
      {children}
    </ThemeContext.Provider>
  )
}

//給消費者們，包裝好專用於此context的鉤子名稱
export const useTheme = () => useContext(ThemeContext)
