import React from 'react'
import {Link} from 'react-router-dom'

export default function BookList() {
  return (
    <>
    <div>
      
      Booklist
    </div>
    <div>
      <p><Link to = '/books/1'>Book1</Link></p>
      <p><Link to = '/books/2'>Book2</Link></p>
    </div>
    </>
  )
}
