import { createContext, useContext, useState } from 'react'

//1.建立與導出
export const CartContext = createContext()

//協助全站(_app.js)裡套用Provider的元件，集中要使用的狀態

export function CartProvider({ children }) {
  const [items, setItems] = useState([])

  const increment = (items, id) => {
    const newItems = items.map((v, i) => {
      if (v.id === id) return { ...v, qty: v.qty + 1 }
      else return v
    })

    setItems(newItems)
  }

  const decrement = (items, id) => {
    const newItems = items.map((v, i) => {
      if (v.id === id) return { ...v, qty: v.qty - 1 }
      else return v
    })

    setItems(newItems)
  }

  const remove = (items, id) => {
    const newItems = items.filter((v, i) => {
      return v.id !== id
    })

    setItems(newItems)
  }

  const addItem = (item) => {
    //先檢查商品的id是否已在購物車內
    const foundIndex = items.findIndex((v, i) => {
      return v.id === item.id
    })

    //如果有找到 進行 數量遞增
    if (foundIndex > -1) {
      increment(items, item.id)
      return
    }

    //先擴充item的屬性多一個 qty:1
    const newItem = { ...item, qty: 1 }

    const newItems = [...items, newItem]

    setItems(newItems)
  }

  //計算總數量
  const calcTotalItems = () => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].qty
    }
    return total
  }

  //計算總金額
  const calcTotalPrice = () => {
    let total = 0
    for (let i = 0; i < items.length; i++) {
      total += items[i].qty * items[i].price
    }
    return total
  }

  //用reduce來計算總數量&總金額
  const totalItems = items.reduce((acc, v) => acc + v.qty, 0)
  const totalPrice = items.reduce((acc, v) => acc + v.qty * v.price, 0)

  return (
    <CartContext.Provider
      value={{
        items,
        remove,
        increment,
        decrement,
        addItem,
        totalItems,
        totalPrice,
      }}
    >
      {children}
    </CartContext.Provider>
  )
}

//給消費者們，包裝好專用於此context的鉤子名稱
export const useCart = () => useContext(CartContext)
