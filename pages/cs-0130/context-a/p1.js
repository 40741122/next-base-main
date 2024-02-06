// import { useContext } from 'react'
// import { ThemeContext } from '@/context/theme'

import { useTheme } from '@/hooks/use-theme'
import List from '@/components/context-a/p1/list'
import SwitchButton from '@/components/context-a/p1/switch-button'

//用於取代a連結的特別元件，可以保持在各不同頁面元件的狀態
import Link from 'next/link'

export default function P1() {
  const { theme } = useTheme()
  console.log(theme)
  return (
    <>
      <h1>Page1</h1>
      <List />
      <SwitchButton />
      <hr />
      <a href="/cs-0130/context-a/p2"> 到Page2(a)</a>
      <hr />
      <Link href="/cs-0130/context-a/p2"> 到Page2(Link)</Link>
    </>
  )
}
