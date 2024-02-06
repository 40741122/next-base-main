import { useState } from 'react'
import { countries, townships, postcodes } from '@/data/data-townships'

export default function Twzipcode() {
  const [countryText, setCountryText] = useState('')
  const [townshipText, setTownshipText] = useState('')

  const findCountryIndex = () => {
    return countries.findIndex((v, i) => {
      return v === countryText
    })
  }

  const findTownshipIndex = () => {
    const ci = countries.findIndex((v, i) => {
      return v === countryText
    })

    return townships[ci].findIndex((v, i) => {
      return v === townshipText
    })
  }

  return (
    <>
      <h1>連動下拉選單範例(台灣郵遞區號)</h1>
      <select
        value={countryText}
        onChange={(e) => {
          setCountryText(e.target.value)
        }}
      >
        <option value="">請選擇城市</option>
        {countries.map((v, i) => {
          return (
            <option key={i} value={v}>
              {v}
            </option>
          )
        })}
      </select>

      <select
        value={townshipText}
        onChange={(e) => {
          setTownshipText(e.target.value)
        }}
      >
        <option value="">請選擇鄉鎮市區</option>
        {countryText !== '' &&
          townships[findCountryIndex()].map((v, i) => {
            return (
              <option key={i} value={v}>
                {v}
              </option>
            )
          })}
      </select>
      <p>
        郵遞區號:{' '}
        {countryText !== '' &&
          townshipText !== '' &&
          postcodes[findCountryIndex()][findTownshipIndex()]}
      </p>
    </>
  )
}
