import Link from 'next/link'
import { useState, useEffect } from 'react'
import styles from '@/styles/product.module.css'

//https://my-json-server.typicode.com/eyesofkids/json-fake-data/products

//demo item
// {
//   id: '1',
//   picture: 'https://via.placeholder.com/150',
//   stock: 5,
//   name: 'iPhone 12 Pro',
//   price: 25000,
//   tags: '蘋果,大螢幕',
// }

export default function List() {
  // 注意1: 初始值至少要給空陣列
  // 注意2: 應用程式執行期間，要保持狀態的資料類型一致
  // 建議在開發時，使用陣列樣貌的範例資料，或使用註解
  const [products, setProducts] = useState([])

  //載入資料的信號值‧因一進本業就需要出指示動畫
  const [isLoading, setIsLoading] = useState(true)

  const getProducts = async () => {
    try {
      //要求資料
      const res = await fetch(
        'https://my-json-server.typicode.com/eyesofkids/json-fake-data/products'
      )

      //res.json()是解析res的body的json格式資料，得到JS的資料格式
      const data = await res.json()

      //設定到狀態，觸發重新渲染(re-render)，進入到update階段
      //進入狀態前檢查資料類型為陣列，以避免錯誤
      if (Array.isArray(data)) {
        setProducts(data)

        //關閉載入動畫
        //因載入時間太端所以看不到動畫，至少播放2秒
        setTimeout(() => {
          setIsLoading(false)
        }, 2000)
      }
    } catch (e) {
      console.error(e)
    }
  }

  //初次渲染"之後(After)"，向伺服器要求資料，設定到狀態中
  useEffect(() => {
    getProducts()
  }, [])

  const loader = (
    <div className={styles['lds-facebook']}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )

  const display = (
    <ul>
      {products.map((v, i) => {
        return (
          <li key={v.id}>
            <Link href={`/cs-0205/product/${v.id}`}>
              {v.name}/{v.price}
            </Link>
          </li>
        )
      })}
    </ul>
  )

  return (
    <>
      <h1>商品詳細頁</h1>
      <hr />
      {isLoading ? loader : display}
    </>
  )
}
