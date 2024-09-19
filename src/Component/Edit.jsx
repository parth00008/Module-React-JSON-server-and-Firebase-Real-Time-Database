import { useLocation,useNavigate } from 'react-router-dom';
import { getDatabase,ref,update } from 'firebase/database';
import { app } from '../Config'
import { useState } from 'react';

const Edit = () =>{
    const navigate=useNavigate()
    const location=useLocation();

    const[user,setuser]=useState({
        username: location.state.val.username,
        password: location.state.val.password,
    })
    function handleUpdate(e){
        e.preventDefault()
        const db=getDatabase(app);
        const dbRef=ref(db,"work/"+location.state.id)
        update(dbRef,{
            username:user.username,
            password:user.password
        }).then((res)=>{
            navigate("/viewUser")
        })

    }
    return (
        <div>
          <h1>Edit User</h1>
          <form>
            <input
              type="text"
              placeholder="username"
              value={user.username}
              onChange={(e) => setuser({ ...user, username: e.target.value })}
            />
            <hr />
            <input
              type="text"
              placeholder="pasword"
              value={user.password}
              onChange={(e) => setuser({ ...user, password: e.target.value })}
            />
            <hr />
            <button type="submit" onClick={handleUpdate}>Update</button>
          </form>
        </div>
      )
    }
    
    export default Edit;



