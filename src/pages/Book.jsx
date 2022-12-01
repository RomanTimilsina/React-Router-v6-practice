import React from 'react'
import { useParams,useOutletContext } from 'react-router-dom'


export default function Book() {
  const obj = useOutletContext()
  const {id} = useParams()
 
  return (
    <>
    
    <div>
      This is Book {id} {obj.hello}
    </div>
    </>
  )
}
