import React from 'react'
import { useParams } from 'react-router-dom'

const Showcont = ({post}) => {
    let {id}=useParams()
    

  return (
    <div className='content'>
        <hi>dvcvdfgs</hi>
        {post.map((item)=>(
              <div className='lidisp' key={item.id}>
                  <div className='head'>
                    <div>
                      <li key={item.id}><p>{item.id}:</p>
                      <p>{item.title}</p></li>
                    </div>
                  </div>
                      <p className='para'>{item.body}</p>
              </div>
            ))}
    </div>
  )
}

export default Showcont