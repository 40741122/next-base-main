import React from 'react'
import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

export default function Profile() {
  const { auth } = useAuth()
  return (
    <>
      <h1>會員個人資料頁</h1>
      <p>ID:{auth.userData.id}</p>
      <p>帳號:{auth.userData.username}</p>
      <hr />
      <Link href="/cs-0130/user/login">到登入頁面</Link>
    </>
  )
}
