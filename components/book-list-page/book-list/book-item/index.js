import React from 'react'
import FavIcon from './fav-Icon'

export default function BookItem({
  isbn,
  title,
  author,
  fav,
  handleToggleFav,
}) {
  return (
    <>
      <tr>
        <td>{isbn}</td>
        <td>{title}</td>
        <td>{author}</td>
        <td>
          <FavIcon isbn={isbn} fav={fav} handleToggleFav={handleToggleFav} />
        </td>
      </tr>
    </>
  )
}
