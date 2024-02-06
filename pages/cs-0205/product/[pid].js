import { useState, useEffect } from 'react'
import { useRouter } from 'next/router'
import Link from 'next/link'
import styles from '@/styles/product.module.css'

//https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/1

//demo item
// {
//     "id": "1",
//     "picture": "https://via.placeholder.com/150",
//     "stock": 5,
//     "name": "iPhone 12 Pro",
//     "price": 25000,
//     "tags": "蘋果,大螢幕"
// }

export default function Detail() {
  const router = useRouter()

  const [product, setProduct] = useState({
    id: '',
    picture: '',
    stock: 0,
    name: '',
    price: 0,
    tag: '',
  })

  const [isLoading, setIsLoading] = useState(true)

  const getProduct = async (pid) => {
    try {
      //要求資料
      const res = await fetch(
        `https://my-json-server.typicode.com/eyesofkids/json-fake-data/products/${pid}`
      )

      //res.json()是解析res的body的json格式資料，得到JS的資料格式
      const data = await res.json()

      //設定到狀態，觸發重新渲染(re-render)，進入到update階段

      if (data.name) {
        setProduct(data)

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
    console.log(router.query)

    //如果isReady為true，確保能得到query的值
    if (router.isReady) {
      const { pid } = router.query
      getProduct(pid)
    }
  }, [router.isReady])

  console.log('render')

  const loader = (
    <div className={styles['lds-facebook']}>
      <div></div>
      <div></div>
      <div></div>
    </div>
  )

  const display = (
    <>
      <p>ID: {product.id}</p>
      <p>名稱: {product.name}</p>
      <p>價格: {product.price > 0 && product.price}</p>
      <p>庫存: {product.stock > 0 && product.stock}</p>
      <hr />
      <Link href="/cs-0205/product/list">列表頁</Link>
    </>
  )

  return (
    <>
      <h1>商品詳細頁</h1>
      <hr />
      {isLoading ? loader : display}
    </>
  )
}
