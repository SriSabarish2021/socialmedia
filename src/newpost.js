import React, { useEffect, useRef, useState } from 'react'
import { useNavigate } from 'react-router-dom'
import './content.css'

const Newpost = () => {
  const [len,getlen]=useState([])
  const [newpost,newchange]=useState([])
  const [abpost,newabchange]=useState([])

  const API_url='http://localhost:3500/data'
  useEffect(()=>{
  const datafornew=async()=>{
      try{
        let newfetching=await fetch(API_url);
        if(!newfetching.ok){throw Error("There is a problem in getting data please reload the site")}
        let newdata=await newfetching.json()
        getlen(newdata)
      }
      catch(err){
        console.log(err.message)
      }
    }  
  (async()=>await datafornew())()
})



  const retrn=useRef()

  const getnew=(newpost,about)=>{
    const numid=len.length?len.length+1:len.length+1
    const id=numid.toString()
    const title=newpost
    const body=about
    const mergedata={id:id,title:title,body:body}
    const managedata=[...len,mergedata]
    const methoding={
      method:'POST',
      headers:{
        "Content-Type":"application/json"
      },
      body:JSON.stringify(mergedata)
    }
    
      const updatefornew=async()=>{
          try{
            let updfetching=await fetch(API_url,methoding);
            if(!updfetching.ok){throw Error("There is a problem in getting data please reload the site")}
            let upddata=await updfetching.json()
            console.log(upddata);
            getlen(upddata)
          }
          catch(err){
            console.log(err.message)
          }
        }  
      (async()=>await updatefornew())()
      newchange('')
      newabchange('')
      window.alert("Your post has been updated check Home page")
  }

 
  

  return (
    <div className='content' style={{background: 'rgb(160,156,222)',
      background: 'linear-gradient(6deg, rgba(160,156,222,1) 0%, rgba(140,171,146,1) 80%)'}} id='newpost'>
      <div className='container'>
        <input ref={retrn} type="text" placeholder='Title' title='post' value={newpost} onChange={(e)=>newchange(e.target.value)}/>
        <textarea  type="paragraph" placeholder='About Post' title='post' value={abpost} onChange={(e)=>newabchange(e.target.value)}/>
        <button type='button' onClick={()=>{getnew(newpost,abpost);retrn.current.focus()}}>Submit</button>
      </div>
       
    </div>
  )
}

export default Newpost