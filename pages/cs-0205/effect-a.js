import { useEffect, useState } from 'react'

export default function EffectA() {
  const [total, setTotal] = useState(0)
  const [force, setForce] = useState(false)

  // 樣式1: 每次render之後(After)都會執行一次第一個傳入參數函式中的程式
  // 使用率: 低(0%~5%)
  // 用途: 自訂勾子開發或除錯紀錄用
  useEffect(() => {
    console.log('每次render都會執行一次')
    console.log(total)
  })

  // 樣式2: 第一次render之後，只會執行一次
  // 使用率: 80%
  // 用途: 元件與伺服器進行呈現後的fetch/ajax獲取資料用、整合第三方js應用
  useEffect(() => {
    console.log('第一次render之後，只執行一次')
  }, [])
  //^^這裡保持空陣列，代表不與任何變數相依賴

  // 樣式3: 第一次render之後(After)會執行一次，當"相依變數們"有變動後(After)在執行一次
  // 使用率: 20%
  // 用途: 不同狀態間的連動關係，不同資料使用同樣元件會使用
  useEffect(() => {
    console.log(
      '第一次render之後(After)會執行一次，當total有變動後(After)再執行一次'
    )
  }, [total, force])
  // ^^^^^^^^^^^^^^代表除了預設從為，還會監聽到total, force 有更動時(類似onChange事件)，在進行其中一次程式碼

  // 樣式4: 元件被移出DOM之前(Before)，會執行一次
  // 使用率: 低(0%~5%)
  // 用途: 通常稱為cleaner，搭配樣式2作元件移出前的變數或反APU的處理(移除事件監聽、計時器或記憶體)
  useEffect(() => {
    return () => {
      console.log('元件被移出DOM之前(Before)，會執行一次')
    }
  }, [])

  return (
    <>
      <h1>useEffect基本樣式</h1>
      <h1>{total}</h1>
      <button
        onClick={() => {
          setTotal(total + 1)
        }}
      >
        +1
      </button>
      <button
        onClick={() => {
          setForce(!force)
        }}
      >
        強制進行re-render
      </button>
    </>
  )
}
