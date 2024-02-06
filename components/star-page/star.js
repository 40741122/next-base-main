import { useState, useEffect } from 'react'
// 導入.module.css檔案
import styles from './star.module.css'

import { FaHeart } from 'react-icons/fa'
import { AiFillFire } from 'react-icons/ai'

export default function Star({
  starCount = 5, //評分的最大值
  initRating = 0, //預設分數
  onRatingChange = (rating = 0) => {},
  color = 'red', //回傳評分用
  icon = <AiFillFire />,
}) {
  const [rating, setRating] = useState(initRating)

  // useEffect(() => {
  //   setRating(initRating)
  // }, [initRating])

  const [hoverRating, setHoverRating] = useState(0)

  return (
    <>
      <h1>星星評分範例</h1>
      <div>
        {Array(starCount)
          .fill()
          .map((v, i) => {
            const score = i + 1

            return (
              <>
                <button
                  className={styles['star-btn']}
                  key={i}
                  onMouseEnter={() => {
                    setHoverRating(score)
                  }}
                  onMouseLeave={() => {
                    setHoverRating(0)
                  }}
                  onClick={() => {
                    setRating(score)
                    onRatingChange(score)
                  }}
                >
                  {/* <span
                  className={
                    score <= rating || score <= hoverRating
                      ? styles['on']
                      : styles['off']
                  }
                >
                  &#9733;
                </span> */}
                  <span
                    style={{
                      color:
                        score <= rating || score <= hoverRating
                          ? color
                          : 'lightblue',
                    }}
                  >
                    {icon}
                  </span>
                </button>
              </>
            )
          })}
      </div>
      <p>你評了{rating}分</p>
    </>
  )
}
