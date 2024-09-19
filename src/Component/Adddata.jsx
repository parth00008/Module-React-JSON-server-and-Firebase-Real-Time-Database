import React, { useState } from 'react'
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Link,useNavigate } from 'react-router-dom';
import {getDatabase,ref,set} from "firebase/database";
import {app} from "../Config";
import './user.css'



function Adddata() {
    const[name,setusername]=useState({
        id:"",
        username:"",
        password:"",
    });


const navigate = useNavigate()
      
    function handlesubmit(data){
         const db = getDatabase(app)
        //  console.log(data.email);
        //  console.log(data.pswrd);
        //  console.log(data.id);
         
 
      set(ref(db,"work/"+ name.id),{

        
        username:data.username,
        password:data.password        
      }).then((res)=>{
        navigate("/viewuser")
      }).catch((err)=>{
        console.log(err);
        
      })
    }
    return (
        <div className='main'>
            <input type="text" placeholder='id' onChange={(e)=>setusername({...name, id:e.target.value})}/>
            <hr />
            <input type="text" placeholder='username' onChange={(e)=>setusername({...name, username:e.target.value})}/>
            <hr />
            <input type="password" placeholder='password'  onChange={(e)=>setusername({...name, password:e.target.value})}/>
            <hr />
            <button type='submit' onClick={()=>{handlesubmit(name)}}>submit</button>
        </div>
    )
}

export default Adddata;
