import React from 'react'
import Book from './book';

function BookList() {
  const firstBook = {
    title: 'Kral Şakir 9 - Muhtişim Dedektifler!',
    img: "https://m.media-amazon.com/images/I/51WlA4WRxaL._SX322_BO1,204,203,200_.jpg",
    author: 'Varol Yaşaroğlu'
  }
  const secondBook=
  {
    title:"Ben Yapmadım!",
    img:"https://m.media-amazon.com/images/I/5113p1GmFRL._SX493_BO1,204,203,200_.jpg",
    author:"Lucy Barnard (Eser Sahibi), Meltem Aydın (Çevirmen)"
  }
  return (
    <div>
      <Book title={firstBook.title} author={firstBook.author} img={firstBook.img} />
      <Book title={secondBook.title} author={secondBook.author} img={secondBook.img}/>
    </div>
  )
}

export default BookList