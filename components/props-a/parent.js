import React from 'react'
import Child from './child'

export default function Parent() {
  return (
    <>
      <h2>父母元件(Parent)</h2>
      {/*  父母元件可以用類似HTML屬性給定值的語法，傳遞任何資料給子女元件 */}
      <Child
        text="今天開始學react"
        price={199}
        hasStock={false}
        sum={(x, y) => x + y}
        aa={[1, 2, 3, 'a']}
        objA={{ a: 1, b: 2 }}
      />
      <hr />
      <Child />
      <hr />
      <Child text={true} />
    </>
  )
}
