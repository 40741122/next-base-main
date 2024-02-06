import { useState } from 'react'
import BookItem from './book-item'

// 範例資料
import data from '@/data/books.json'

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
    setBooks(toggleFav(books, isbn))
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
          {books.map((v, i) => {
            const { isbn, title, author, fav } = v

            return (
              <BookItem
                key={isbn}
                isbn={isbn}
                title={title}
                author={author}
                fav={fav}
                handleToggleFav={handleToggleFav}
              />
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
