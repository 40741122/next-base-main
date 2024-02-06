import React from 'react'

export default function InputId() {
  return (
    <>
      <h2>使用id的input表單元素</h2>
      <input type="text" id="my-input" />
      <button
        onClick={() => {
          const v = document.querySelector('#my-input').value

          console.log(v)
        }}
      >
        獲得值
      </button>
      <button
        onClick={() => {
          document.querySelector('#my-input').focus()
        }}
      >
        聚焦(focus)
      </button>
      <button
        onClick={() => {
          document.querySelector('#my-input').blur()
        }}
      >
        失焦(blur)
      </button>
    </>
  )
}
