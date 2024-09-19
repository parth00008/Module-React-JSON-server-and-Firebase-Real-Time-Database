import React, { useEffect, useState } from 'react';
import { ref, getDatabase, onValue, remove } from 'firebase/database';
import { app } from '../Config';
import { useNavigate } from 'react-router-dom';
import './user.css'



function Viewuser() {
    const navigate = useNavigate();
    const [user, setuser] = useState("");

    useEffect(() => {
        const db = getDatabase(app);
        const useref = ref(db, "work");
        onValue(useref, (snapshot) => {
            setuser(snapshot.val());
        });
    }, []);

    function handledelete(id) {
        const db = getDatabase(app);
        const userRef = ref(db, "work/" + id);
        remove(userRef);
    }

    function handleEdit(id, val) {
        navigate("/editUser", { state: { id, val } });
    }

    return (
        <div>
            <h1>View All Users</h1>
            <table>
                <thead>
                    <tr>
                        <th>Username</th>
                        <th>Password</th>
                        <th>Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {user && Object.entries(user).map(([key, val]) => (
                        <tr key={key}>
                            <td>{val.username}</td>
                            <td>{val.password}</td>
                            <td>
                                <button onClick={() => handledelete(key)}>Delete</button>
                                <button onClick={() => handleEdit(key, val)}>Edit</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
}

export default Viewuser;
