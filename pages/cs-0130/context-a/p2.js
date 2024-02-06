import React from 'react'
// import { useContext } from 'react'
// import { ThemeContext } from '@/context/theme'
import { useTheme } from '@/hooks/use-theme'

//用於取代a連結的特別元件，可以保持在各不同頁面元件的狀態
import Link from 'next/link'

export default function P2() {
  const { theme } = useTheme()
  return (
    <>
      <h1>Page2</h1>
      <p
        style={{
          backgroundColor: theme === 'dark' ? '#000' : '#fff',
          color: theme === 'dark' ? '#fff' : '#000',
        }}
      >
        The US government has released the names of three troops killed by an
        enemy drone attack in Jordan on Sunday. Sgt William Jerome Rivers, 46,
        Specialist Kennedy Ladon Sanders, 24, and Specialist Breonna Alexsondria
        Moffett, 23, were killed when a drone hit their housing unit.
      </p>
      <hr />
      <a href="/cs-0130/context-a/p1"> 到Page1(a)</a>
      <hr />
      <Link href="/cs-0130/context-a/p1"> 到Page1(Link)</Link>
    </>
  )
}
