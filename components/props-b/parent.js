import { useState } from 'react'
import ChildA from './child-a'
import ChildB from './child-b'

export default function Parent() {
  const [pData, setPData] = useState('parent data')

  //專門給ChildB回傳資料用
  const [dataFromChild, setDataFromChild] = useState('')

  return (
    <>
      <h2>Parent</h2>
      <hr />
      <ChildA dataFromChild={dataFromChild} />
      <hr />
      <ChildB setDataFromChild={setDataFromChild} />
    </>
  )
}
