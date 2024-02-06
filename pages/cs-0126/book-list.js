import { useState } from 'react'
import Image from 'next/image'

// 範例資料
import data from '@/data/books.json'

// 實心圖
import bookmarkIconFill from '@/assets/bookmark-fill.svg'
// 空心圖
import bookmarkIcon from '@/assets/bookmark.svg'

export default function BookList() {
  //擴充原本的書籍資料，多一個fav屬性(boolean, default: false) 代表有沒有收藏
  const initState = data.map((v) => {
    return { ...v, fav: false }
  })

  const [books, setBooks] = useState(initState)

  const toggleFav = (books, isbn) => {
    return books.map((v) => {
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      return v
    })
  }

  const handleToggleFav = (isbn) => {
    const newBooks = books.map((v) => {
      if (v.isbn === isbn) return { ...v, fav: !v.fav }
      return v
    })

    setBooks(newBooks)
  }

  return (
    <>
      <h1>書籍清單</h1>
      <table>
        <thead>
          <tr>
            <th>ISBN</th>
            <th>title</th>
            <th>author</th>
            <th>加入收藏</th>
          </tr>
        </thead>
        <tbody>
          {books.map((v) => {
            return (
              <tr key={v.isbn}>
                <td>{v.isbn}</td>
                <td>{v.title}</td>
                <td>{v.author}</td>
                {/* <td>
                  <Image
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                    onClick={() => {
                      const newBooks = books.map((a) => {
                        if (a.isbn === v.isbn) {
                          return { ...a, fav: !v.fav }
                        }
                        return a
                      })
                      setBooks(newBooks)
                    }}
                  />
                </td> */}
                {/* <td>
                  <Image
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                    onClick={() => {
                      handleToggleFav(v.isbn)
                    }}
                  />
                </td> */}
                <td>
                  <Image
                    src={v.fav ? bookmarkIconFill : bookmarkIcon}
                    alt=""
                    onClick={() => {
                      setBooks(toggleFav(books, v.isbn))
                    }}
                  />
                </td>
              </tr>
            )
          })}
        </tbody>
      </table>
      <style jsx>{`
        table {
          font-family: Arial, Helvetica, sans-serif;
          border-collapse: collapse;
          width: 100%;
        }

        td,
        th {
          border: 1px solid #ddd;
          padding: 8px;
        }

        tr:nth-child(even) {
          background-color: #f2f2f2;
        }

        tr:hover {
          background-color: #ddd;
        }

        th {
          padding-top: 12px;
          padding-bottom: 12px;
          text-align: left;
          background-color: #04aa6d;
          color: white;
        }
      `}</style>
    </>
  )
}
