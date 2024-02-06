import { indexOf, set } from 'lodash'
import { useState } from 'react'

const objArray = [
  {
    id: 1,
    text: 'a',
  },
  {
    id: 2,
    text: 'b',
  },
  {
    id: 3,
    text: 'c',
  },
  {
    id: 4,
    text: 'aa',
  },
]

export default function ObjectArray() {
  // 呈現(渲染)時會與使用者互動時進行改動，必需是state
  const [data, setData] = useState(objArray)

  return (
    <>
      <h1>物件陣列的各種操作</h1>
      <hr />
      <h2>資料表格</h2>
      <table border="1">
        <thead>
          <tr>
            <th>ID</th>
            <th>Text</th>
          </tr>
        </thead>
        <tbody>
          {data.map((v, i) => {
            return (
              <tr key={v.id}>
                <td>{v.id}</td>
                <td>{v.text}</td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <hr />
      <h2>操作</h2>
      <p>
        <strong>
          注意: 請在任一操作前先重新整理網頁 ，或是對重覆id值進行加入時的限制。
        </strong>
        有些操作是key值會對應id的關係，會產生key值重覆問題，造成不預期的結果。實務上務必要考慮key不可以重覆問題。
      </p>

      <button
        onClick={() => {
          // 先寫出要新增的物件值
          const newObj = { id: 99, text: 'xxx' }

          // 1. 從目前的狀態拷貝出一個新的變數值(陣列/物件)
          // 2. 在新的變數值(陣列/物件)上作處理
          // 3. 設定回原本的狀態中

          //1 //2
          const newData = [newObj, ...data]

          //3
          setData(newData)
        }}
      >
        1. 列表最前面，新增一個物件值id為99與文字為xxx的物件
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 88, text: 'yyy' }

          //1 //2
          const newData = [...data, newObj]

          //3
          setData(newData)
        }}
      >
        2. 列表最後面，新增一個物件值id為88與文字為yyy的物件
      </button>
      <br />
      <button
        onClick={() => {
          //產生id的方式
          //1. 專用函式庫(uuid/nanoid)
          // const newId = self.crypto.randomUUID()

          //2.用時間 Number(new Date()) / +new Date() / Date.now()
          const newId = Date.now()

          //3.隨機字串或hash
          // https://stackoverflow.com/questions/1349404/generate-random-string-characters-in-javascript
          // const newId = (Math.random() + 1).toString(36).substring(7)

          //4.模仿資料表自動遞增id的方式
          // const ids = data.map((v) => v.id)
          // const newId = data.length > 0 ? Math.max(...ids) + 1 : 1

          const newObj = { id: newId, text: 'xxx' }

          const newData = [newObj, ...data]

          setData(newData)
        }}
      >
        3. 列表最前面，新增一個文字為xxx的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          const newId = Date.now()

          const newObj = { id: newId, text: 'yyy' }

          const newData = [...data, newObj]

          setData(newData)
        }}
      >
        4. 列表最後面，新增一個文字為yyy的物件(id不能與其它資料重覆)
      </button>
      <br />
      <button
        onClick={() => {
          // const newData = data.filter((v) => {
          //   if (v.text.includes('a')) {
          //     return v
          //   }
          // })

          const newData = data.filter((v) => {
            return v.text.includes('a')
          })

          setData(newData)
        }}
      >
        5. 尋找(過濾)只呈現所有文字中有包含a英文字母的資料
      </button>
      <br />
      <button
        onClick={() => {
          const newData = data.filter((v) => {
            return v.text !== 'b'
          })

          setData(newData)
        }}
      >
        6. 刪除文字為b的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          // const newData = data.filter((v) => {
          //   return v.id !== 4
          // })
          // setData(newData)
          //改用splice，公式為 'array.splice(index, 1)' 注意會修改到原呼叫陣列
          const newData = [...data]

          const index = newData.findIndex((v) => {
            return v.id === 4
          })

          if (index > -1) {
            setData(newData)
          }
        }}
      >
        7. 刪除id為4的物件資料
      </button>
      <br />
      <button
        onClick={() => {
          const newObj = { id: 5, text: 'bbb' }

          const index = data.findIndex((v) => {
            return v.id === 2
          })

          // 使用splice
          // if (index > -1) {
          //   const newData = [...data]

          //   newData.splice(index + 1, 0, newObj)

          //   setData(newData)
          // }

          //使用slice
          //從該索引中產生兩個子女陣列
          //公式: subArray = array.slice(startIndex, [endIndex])
          //[1,2,3,4] index = 1, aa=[1,2], ab=[3,4]
          const aa = data.slice(0, index + 1)
          const ab = data.slice(index + 1)

          //與新物件合併成新的物件陣列
          const newData = [...aa, newObj, ...ab]
          //設定回原狀態中

          setData(newData)
        }}
      >
        8. 在id為2後面插入id為5與文字為bbb的物件
      </button>
      <br />
      <button
        onClick={() => {
          // const newData = data.filter((v) => {
          //   if (v.id === 3) {
          //     v.text = 'cccc'
          //   }
          //   return v
          // })

          // setData(newData)

          const newData = data.map((v) => {
            if (v.id === 3) {
              return { ...v, text: 'cccc' }
            }
            return v
          })

          setData(newData)
        }}
      >
        9. 取代id為3的文字為cccc
      </button>
      <br />
      <button
        onClick={() => {
          setData([])
        }}
      >
        10. 清空表格
      </button>
    </>
  )
}
