import React from 'react'
import PropTypes from 'prop-types'

// 子女元件，可以利用函式的傳入參數props取得父母元件傳來的資料
// 解構賦值語法，可以直接從props中取出text、price、hasStock…各個屬性值
export default function Child({
  text = '',
  price = 0,
  hasStock = false,
  sum = () => {},
  aa = [],
  objA = {},
}) {
  return (
    <>
      <h3>子女元件(Child)</h3>
      <p>text: {text}</p>
      <p>price: {price}</p>
      <p>hasStock: {hasStock ? 'true' : 'false'}</p>
      <p>1+2={sum(1, 2)}</p>
      <p>{aa}</p>
      <p>{JSON.stringify(objA)}</p>
    </>
  )
}

Child.propTypes = {
  text: PropTypes.string,
  price: PropTypes.number,
  hasStock: PropTypes.bool,
}
