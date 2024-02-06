import CartList from '@/components/cart/cart-list'
import Navbar from '@/components/cart/navbar'
import styles from '@/components/cart/cart.module.css'
import Link from 'next/link'
import { useCart } from '@/hooks/use-cart'

import Swal from 'sweetalert2'
import withReactContent from 'sweetalert2-react-content'

const MySwal = withReactContent(Swal)

export default function Cart() {
  const { items, increment, decrement, remove, totalItems, totalPrice } =
    useCart()

  const notifySA = (productName) => {
    MySwal.fire({
      icon: 'question',
      title: <>{`確認要刪除${productName}嗎?`}</>,
      showConfirmButton: true,
      confirmButtonText: '確認',
      showDenyButton: true,
      denyButtonText: `取消`,
      timer: 1500,
    }).then((result) => {
      /* Read more about isConfirmed, isDenied below */
      if (result.isConfirmed) {
        return 'aaa'
      } else if (result.isDenied) {
        return 'bbb'
      }
    })
  }
  return (
    <>
      <div className={styles['container']}>
        <Navbar />
        <h1>購物車</h1>
        <Link href="/cs-0201/checkout/product">到商品頁面</Link>
        <h3>購物車</h3>
        <div className={styles['cart']}>
          <CartList
            items={items}
            increment={increment}
            decrement={decrement}
            remove={remove}
            notifySA={notifySA}
          />
        </div>
        <hr />
        <div>
          總數量: {totalItems} / 總金額: {totalPrice}
          {/* 總數量: {calcTotalItems()} / 總金額: {calcTotalPrice()} */}
        </div>
      </div>
    </>
  )
}
