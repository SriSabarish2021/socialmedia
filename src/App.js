import './App.css';
import './sma.css'
import './conflex.css';
import Header from './header';
import Nav from './nav';
import Content from './content';
import Footer from './footer';
import Newpost from './newpost';
import Postpg from './postpg';
import Missing from './missing';
import { Route, Routes } from 'react-router-dom';
import { Link } from 'react-router-dom'
import Img from './img';
import React, { useState } from 'react'
import Showcont from './Showcont';
function App() {
  const [post,setpost]=useState([])

  const [noval,getval]=useState('')
    const getall=()=>{
      console.log(console.log(noval))  
      getval('')
    }
    const datageting=async()=>{
      try{
        let fetching=await fetch('http://localhost:3500/data')
        if(!fetching.ok)throw Error("There is a problem in getting data please reload the site")
        let data=await fetching.json()
        setpost(data)
      }
      catch(err){
        
      }
    }  
    (async()=>await datageting())()

  

  return (
    <div className="App">
      <Header title={'Social MED AP'}></Header>
      <Nav
      noval={noval}
      getval={getval}
      getall={getall}>
      </Nav>
      <div className='contflex'>
        <div className='sidenav'>
          <li><Link className='link' to="/">Home</Link></li>
          <li><Link className='link' to="/newpost">New Post</Link></li>
          <li><Link className='link' to="/postpg">Post Page</Link></li>
          <li><Link className='link' to='/missing'>Missing</Link></li>
        </div>
        <Routes>
          <Route path='/' element={<Content post={post}
          setpost={setpost}
          datageting={datageting}/>}></Route>
          <Route path={`/${noval}`} element={<noval />}></Route>
          <Route path='/post4' element={<Img />}></Route>
          <Route path='/newpost' element={<Newpost/>}></Route>
          <Route path='/postpg' element={<Postpg/>}></Route>
          <Route path='/missing' element={<Missing/>}></Route>
          <Route path='*' element={<Missing />}></Route>
          <Route path=":id" element={< Showcont post={post}/>}></Route>
        </Routes>
      </div>
      
      <Footer></Footer>

    </div>
  );
}

export default App;
