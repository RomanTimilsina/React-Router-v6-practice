import React from 'react'
import {Link, Outlet} from 'react-router-dom'

export default function BookLayout() {
  return (
    <div>
      <Outlet context = {{hello:"World"}}/>
      <p><Link to = '/books/1'>Book1</Link></p>
      <p><Link to = '/books/2'>Book2</Link></p>
      
    </div>
  )
}
