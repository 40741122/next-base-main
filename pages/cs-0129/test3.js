import React, { useState } from 'react'

export default function Test3() {
  const [state1, setState1] = useState(0)
  const [state2, setState2] = useState(0)
  return (
    <>
      <p>state1={state1}</p>
      <p>state2={state2}</p>
      <button
        onClick={() => {
          const newState1 = state1 + 2
          setState1(newState1)
          setState2(newState1 * 2)
        }}
      >
        +
      </button>
    </>
  )
}
