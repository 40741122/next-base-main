import { useState } from 'react'

const getToday = () => {
  const now = new Date()
  const yyyy = now.getFullYear()
  const mm =
    now.getMonth() + 1 < 10 ? '0' + (now.getMonth() + 1) : now.getMonth() + 1
  const dd = now.getDate() < 10 ? '0' + now.getDate() : now.getDate()
  return `${yyyy}-${mm}-${dd}`
}

export default function Html5Form() {
  const [inputText, setInputText] = useState('')
  const [textareaText, setTextareaText] = useState('')
  const [inputDate, setInputDate] = useState(getToday())

  const [show, setShow] = useState(false)

  const petOptions = ['狗', '貓', '魚']
  const [pet, setPet] = useState('魚')

  const [pets, setPets] = useState('狗', '貓')

  const handlePetsChange = (e) => {
    const tv = e.target.value

    return pets.includes(tv)
      ? setPets(pets.filter((v) => v !== tv))
      : setPets([...pets, tv])
  }

  const newPetOptions = petOptions.map((v, i) => {
    return { id: i + 1, name: v, checked: false }
  })

  const [petsX, setPetsX] = useState(newPetOptions)

  const toggleCheckbox = (petsX, id) => {
    return petsX.map((v, i) => {
      if (v.id === id) return { ...v, checked: !v.checked }
      else return v
    })
  }

  return (
    <>
      <h1>可控表單元件</h1>
      <section title="input-text">
        <h2>文字輸入框(input-text)</h2>
        <input
          type="text"
          //條件1 value要對應到狀態
          value={inputText}
          //條件2 onChange要能更新到對應的狀態
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <p>password</p>
        <input
          type={show ? 'text' : 'password'}
          value={inputText}
          onChange={(e) => {
            setInputText(e.target.value)
          }}
        />
        <input
          type="checkbox"
          checked={show}
          onChange={(e) => setShow(e.target.checked)}
        />
        呈現密碼
        <p>date</p>
        <input
          type="date"
          value={inputDate}
          onChange={(e) => {
            setInputDate(e.target.value)
          }}
          min="2018-01-01"
          max="2024-12-31"
        />
      </section>
      <section title="textarea">
        <h2>文字輸入區域(textarea)</h2>
        <textarea
          value={textareaText}
          onChange={(e) => {
            setTextareaText(e.target.value)
          }}
        />
      </section>
      <section title="radio button">
        <h2>選項按鈕群組(radio button group)</h2>
        {petOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="radio"
                checked={v === pet}
                value={v}
                onChange={(e) => {
                  setPet(e.target.value)
                }}
              />
              {v}
            </label>
          )
        })}
      </section>
      <section title="checkbox group">
        <h2>核取方塊(checkbox group)</h2>
        {petOptions.map((v, i) => {
          return (
            <label key={i}>
              <input
                type="checkbox"
                checked={pets.includes(v)}
                value={v}
                onChange={(e) => {
                  //為勾選時觸發事件的值，相當於v
                  const tv = e.target.value

                  //判斷目前此值是否有在狀態列中
                  if (pets.includes(tv)) {
                    //如果有在狀態列中 ==> 移出陣列
                    const newPets = pets.filter((v2, i2) => {
                      return v2 !== tv
                    })
                    setPets(newPets)
                  } else {
                    //如果有在狀態列中 ==>加入陣列
                    const newPets = [...pets, tv]
                    setPets(newPets)
                  }
                }}
              />
              {v}
            </label>
          )
        })}
      </section>
      <section title="checkbox group X">
        <h2>核取方塊(checkbox group X版本)</h2>
        {petsX.map((v, i) => {
          return (
            <label key={v.id}>
              <input
                type="checkbox"
                checked={v.checked}
                value={v.name}
                onChange={() => {
                  setPetsX(toggleCheckbox(petsX, v.id))
                }}
              />
              {v.name}
            </label>
          )
        })}
      </section>
    </>
  )
}
