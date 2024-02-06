import { set } from 'lodash'
import { useState } from 'react'

const initialProducts = [
  {
    id: 0,
    name: '小熊餅乾',
    count: 1,
  },
  {
    id: 1,
    name: '巧克力豆餅乾',
    count: 5,
  },
  {
    id: 2,
    name: '小老板海苔',
    count: 2,
  },
]

export default function ShoppingCart() {
  const [products, setProducts] = useState(initialProducts)

  const increment = (products, id) => {
    return products.map((v) => {
      if (v.id === id) return { ...v, count: v.count + 1 }
      else return v
    })
  }

  const decrement = (products, id) => {
    return products.map((v) => {
      if (v.id === id) return { ...v, count: v.count - 1 }
      else return v
    })
  }

  const remove = (products, id) => {
    return products.filter((v) => {
      return v.id !== id
    })
  }

  return (
    <ul>
      {products.map((product) => (
        <li key={product.id}>
          {product.name} (<b>{product.count}</b>)
          <button
            onClick={() => {
              setProducts(increment(products, product.id))
            }}
          >
            +
          </button>
          <button
            onClick={() => {
              // const nextProductCount = product.count - 1
              // if (nextProductCount === 0) {
              if (product.count === 1) {
                setProducts(remove(products, product.id))
              } else {
                setProducts(decrement(products, product.id))
              }

              // const nextProduct = decrement(products, product.id)
              // const nextProduct2 = nextProduct.filter((v) => v.count > 0)

              // setProducts(nextProduct2)
            }}
          >
            –
          </button>
        </li>
      ))}
    </ul>
  )
}
