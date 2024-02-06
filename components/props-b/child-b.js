import { useState, useEffect } from 'react'

export default function ChildB({ setDataFromChild = () => {} }) {
  const [cData, setCDate] = useState('child b data')

  //選擇2:在元件一呈現(第一次render)時，執行回送資料的方法
  useEffect(() => {
    setDataFromChild(cData)
  }, [])

  return (
    <>
      <div>ChildB</div>
      <button
        onClick={() => {
          //選擇1:事件處理函式時執行
          setDataFromChild(cData)
        }}
      >
        回送資料給父母(Parent)
      </button>
    </>
  )
}
