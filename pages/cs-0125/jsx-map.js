import React from 'react'

export default function Jsxmap() {
  const products = [
    {
      id: 1,
      name: 'cookies',
    },
    {
      id: 2,
      name: 'chocolate',
    },
  ]

  return (
    <>
      <h1>JSX語法陣列的map範例</h1>
      <hr />
      <ul>
        {products.map((product) => {
          return <li key={product.id}>{product.name}</li>
        })}
      </ul>
    </>
  )
}
