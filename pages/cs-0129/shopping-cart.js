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

  return (
    <ul>
      {products.map((product) =>
        product.count > 0 ? (
          <li key={product.id}>
            {product.name} (<b>{product.count}</b>)
            <button
              onClick={() => {
                product.count += 1
                const newProduct = products.map((v) => {
                  if (v.id === product.id) {
                    return { ...v, count: product.count }
                  }
                  return v
                })
                setProducts(newProduct)
              }}
            >
              +
            </button>
            <button
              onClick={() => {
                product.count -= 1
                const newProduct = products.map((v) => {
                  if (v.id === product.id) {
                    return { ...v, count: product.count }
                  }
                  return v
                })
                setProducts(newProduct)
              }}
            >
              –
            </button>
          </li>
        ) : (
          <></>
        )
      )}
    </ul>
  )
}
