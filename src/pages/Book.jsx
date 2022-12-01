import React from 'react'
import { useParams,useOutletContext } from 'react-router-dom'


export default function Book() {
  const {id} = useParams()
  const obj = useOutletContext()
  return (
    <>
    
    <div>
      This is Book {id} {obj.hello}
    </div>
    </>
  )
}
