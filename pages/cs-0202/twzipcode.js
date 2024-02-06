import React, { useState } from 'react'
import { countries, townships, postcodes } from '@/data/data-townships'

// 測試用
// const cs = ['基隆市', '台北市']
// const ts = [
//   ['仁愛區', '信義區'],
//   ['中正區', '大同區'],
// ]

export default function Twzipcode() {
  //紀錄陣列索引值，預設值為-1([陣列不會有-1的索引值])
  const [countryIndex, setCountryIndex] = useState(-1)
  const [townshipIndex, setTownshipIndex] = useState(-1)

  return (
    <>
      <h1>連動下拉選單範例(台灣郵遞區號)</h1>
      <select
        value={countryIndex}
        onChange={(e) => {
          //e.target.value必須為字串值，狀態需是數字(陣列索引)，所以要轉換為數字
          setCountryIndex(Number(e.target.value))
        }}
      >
        <option>請選擇城市</option>
        {countries.map((v, i) => {
          return (
            <option key={i} value={i}>
              {v}
            </option>
          )
        })}
      </select>

      <select
        value={townshipIndex}
        onChange={(e) => {
          setTownshipIndex(Number(e.target.value))
        }}
      >
        <option value={-1}>請選擇鄉鎮市區</option>
        {countryIndex > -1 &&
          townships[countryIndex].map((v, i) => {
            return (
              <option key={i} value={i}>
                {v}
              </option>
            )
          })}
      </select>
      <p>
        郵遞區號:{' '}
        {countryIndex > -1 &&
          townshipIndex > -1 &&
          postcodes[countryIndex][townshipIndex]}
      </p>
    </>
  )
}
