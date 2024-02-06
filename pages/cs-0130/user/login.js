import React from 'react'
import { useAuth } from '@/hooks/use-auth'
import Link from 'next/link'

export default function Login() {
  const { auth, login, logout } = useAuth()
  return (
    <>
      <h1>會員登入頁面</h1>
      <p>目前登入狀態:{auth.isAuth ? '會員已登入' : '未登入'}</p>
      <p>
        <button
          onClick={() => {
            {
              auth.isAuth ? logout() : login()
            }
          }}
        >
          {auth.isAuth ? '登出' : '登入'}
        </button>
      </p>
      <hr />
      <Link href="/cs-0130/user/profile">到個人資料頁</Link>
    </>
  )
}
