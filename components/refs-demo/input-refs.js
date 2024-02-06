import { useRef } from 'react'

export default function InputRefs() {
  // 初始值為null
  const inputRef = useRef(null)
  return (
    <>
      <h2>使用refs的input表單元素</h2>
      <input type="text" ref={inputRef} />
      <button
        onClick={() => {
          const v = inputRef.current.value

          console.log(v)
        }}
      >
        獲得值
      </button>
      <button
        onClick={() => {
          inputRef.current.focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          inputRef.current.blur()
        }}
      >
        失焦(blur)
      </button>
    </>
  )
}
