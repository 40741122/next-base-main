// import { useContext } from 'react'
// import { ThemeContext } from '@/context/theme'

import { useTheme } from '@/hooks/use-theme'

export default function List() {
  const { theme } = useTheme()
  return (
    <>
      <ul
        style={{
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        <li>111</li>
        <li>222</li>
        <li>333</li>
      </ul>
    </>
  )
}
