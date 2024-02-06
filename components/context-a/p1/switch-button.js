import React from 'react'
// import { useContext } from 'react'
// import { ThemeContext } from '@/context/theme'
import { useTheme } from '@/hooks/use-theme'

export default function SwitchButton() {
  const { theme, toggleTheme } = useTheme()
  console.log(theme)
  return (
    <>
      <p>目前佈景為:{theme}</p>
      <button
        onClick={() => {
          toggleTheme(theme)
        }}
      >
        切換為 {theme === 'dark' ? '明亮' : '黑暗'}
      </button>
    </>
  )
}
