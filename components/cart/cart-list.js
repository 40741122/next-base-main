import React from 'react'
import styles from '@/components/cart/cart.module.css'

export default function CartList({
  items = [],
  increment = () => {},
  decrement = () => {},
  remove = () => {},
  notifySA = () => {},
}) {
  return (
    <>
      <ul className={styles['list']}>
        {items.map((v, i) => {
          return (
            <>
              <li className={styles['item']} key={v.id}>
                <div className={styles['w-400']}>{v.name}</div>
                <div>{v.price}</div>
                <div>
                  <button
                    onClick={() => {
                      increment(items, v.id)
                    }}
                  >
                    +
                  </button>
                  <span>{v.qty}</span>
                  <button
                    onClick={() => {
                      if (v.qty === 1) {
                        remove(items, v.id)
                      } else {
                        decrement(items, v.id)
                      }
                    }}
                  >
                    -
                  </button>
                </div>
                <div>
                  <button
                    onClick={() => {
                      notifySA(v.name)
                      // remove(items, v.id)
                    }}
                  >
                    移除
                  </button>
                </div>
              </li>
            </>
          )
        })}
      </ul>
    </>
  )
}
