import { useState } from 'react'

export default function Index() {
  //宣告一組狀態
  //[得到值的變數(getter)，設定值的方法(setter)] = useState(初始值)
  const [total, setTotal] = useState(0)

  return (
    <h1
      role="presentation"
      onClick={() => {
        setTotal(total + 1)
      }}
    >
      {total}
    </h1>
  )
}
