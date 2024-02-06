import React, { useState } from 'react'

export default function Test4() {
  const [password, setPassword] = useState('')
  const [score, setScore] = useState(0)
  const rating = (str) => {
    let r = 0
    if (str.length >= 6) r += 2
    if (str.length >= 8) r += 2

    return r
  }
  return (
    <>
      <h1>密碼輸入檢查</h1>
      <input
        type="password"
        value={password}
        onChange={(e) => {
          setPassword(e.target.value)

          setScore(rating(e.target.value))
        }}
      />
      <p>密碼強度:{score}</p>
    </>
  )
}
