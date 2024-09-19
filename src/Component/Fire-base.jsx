import React from 'react'
import {getDatabase,ref,set} from "firebase/database";
import {app} from "../Config";
import { Link,useNavigate } from 'react-router-dom';



    
function Firebase() {
       
    const navigate = useNavigate()
        
function handledata(){
    // const db = getDatabase(app)
    //   set(ref(db,"work/"+id),{
    //     username:name,
    //     department:dept
        
    //   })
  
    if (handledata) {
        navigate('/addata')
    } else {
        console.log(err);
        
    }
    }  
function handleuser(){
    if (handledata) {
        navigate('/viewuser')
    } else {
        console.log(err);
        
    }
}
    return (
        <div>
            <button onClick={handledata}>add data</button>
            <button onClick={handleuser}>view user</button>
        </div>
    )
}

export default Firebase;


