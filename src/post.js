import React from 'react'
import { useParams } from 'react-router-dom'
const Post = () => {
    const {id}=useParams()
  return (
    <div className='content'>
        <h1>{id}</h1>
    </div>
  )
}

export default Post