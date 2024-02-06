import React from 'react'

export default function JsxA() {
  return (
    <>
      <h1>JSX語法中各種值的渲染呈現</h1>
      <h2>Number</h2>
      {123}
      {1 + 2}
      {NaN}
      <hr />
      <h2>String</h2>
      {'hello'}
      {`total=${100 - 1}`}
      <hr />
      <h2>Boolean</h2>
      {/* 不呈現 */}
      {true}
      {false}
      <hr />
      <h2>null / undefined</h2>
      {null}
      {undefined}
      <hr />
      <h2>陣列(Array)</h2>
      {/* 類似 array.join('') */}
      {[1, 2, 3]}
      {['a', 'b', 'c']}
      {[<h1 key="0">1</h1>, <p key="1">2</p>]}
      <hr />
      <h2>物件(Object)</h2>
      {/* 不能直接渲染呈現，並非React Child */}
      {/* { a: 1, b: 2 } */}
      <hr />
      <h2>函式(Function)</h2>
      {/* 沒渲染呈現，有警告，並非React Child */}
      {() => {}}
    </>
  )
}
