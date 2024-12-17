import React, { useEffect } from 'react'
import './content.css'
import { RiDeleteBin6Line } from "react-icons/ri";
import { Link } from 'react-router-dom';
const Content = ({post,setpost,datageting}) => {
  const url='http://localhost:3500/data'
  useEffect(()=>{
    const datageting=async()=>{
      try{
        let fetching=await fetch(url)
        let data=await fetching.json()
        setpost(data)
      }
      catch(err){
        console.log(err)
      }
    }  
    (async()=>await datageting())()
  })

  const deleter=(id)=>{
    
 
    const deletemethoding={
      method:'DELETE',
      headers:{
        "Content-Type":"application/json"
      }
    }
    const delurl=`${url}/${id}`
    const delfornew=async()=>{
      try{
        let delfetching=await fetch(delurl,deletemethoding);
        if(!delfetching.ok){throw Error("There is a problem in getting data please reload the site")}
      }
      catch(err){
        console.log(err)
      }

    }  
     (async()=>await delfornew())()
  }

  return (
        <div className='content' >
          <h1>Your Posts....</h1>
          {post.length?(
            <ul className='ull'>
            {post.map((item)=>(
              <div className='lidisp' key={item.id}>
                <div className='delete'>
                    <div>
                      <button onClick={()=>deleter(item.id)}><RiDeleteBin6Line ></RiDeleteBin6Line></button>
                    </div>
                </div>
                  
                  <div className='head'>
                    <div>
                      <li key={item.id}><Link   className='titleer' to={`${item.id}`}><p>{item.id}:</p>
                      <p>{item.title}</p></Link></li>
                    </div>
                  </div>
                      <p className='para'>{(item.body).length<=25?item.body:`${(item.body).slice(0,25)}...`}</p>
              </div>
            ))}
          </ul>
          ):<p>There is no item to display</p>}

        </div>
        
  )
}
export default Content