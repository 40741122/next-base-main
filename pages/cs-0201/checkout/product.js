import React from 'react'
import Link from 'next/link'
import ProductList from '@/components/cart/product-list'
import styles from '@/components/cart/cart.module.css'
import Navbar from '@/components/cart/navbar'

import { useCart } from '@/hooks/use-cart'
import toast, { Toaster } from 'react-hot-toast'

import { useRouter } from 'next/router'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function Product() {
  const { addItem } = useCart()

  const router = useRouter()

  const notifySA = (productName) => {
    MySwal.fire({
      icon: 'success',
      title: <>{`${productName}已成功加入到購物車中`}</>,
      showConfirmButton: true,
      confirmButtonText: '前往購物車頁面',
      showDenyButton: true,
      denyButtonText: `停留此頁`,
      timer: 1500,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        router.push('/cs-0201/checkout/cart')
      } else if (result.isDenied) {
        Swal.fire('祝您購物愉快', '', 'info')
      }
    })
  }

  const notify = (productName) => {
    const msgBox = (
      <div style={{ backgroundColor: 'white' }}>
        <p>{`${productName}已成功加入到購物車中`}</p>
        <button
          onClick={() => {
            // 另一種導向至另一頁面路由的方式
            router.push('/cs-0201/checkout/cart')
          }}
        >
          前往 購物車頁面
        </button>
      </div>
    )
    toast.success(msgBox)
  }

  return (
    <>
      <div className={styles['container']}>
        <Navbar />
        <h1>商品列表頁</h1>
        <div></div>
        <hr />
        <Link href="/cs-0201/checkout/cart">到購物車頁面</Link>
        <ProductList addItem={addItem} notify={notify} notifySA={notifySA} />
      </div>
      <Toaster />
    </>
  )
}
