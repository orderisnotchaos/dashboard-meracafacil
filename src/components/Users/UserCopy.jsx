import React, {useEffect, useState} from "react";

import "./Users.css"
function Users(props){
    const [users, setUsers] = useState([]);
    let i = 0;
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/users').then((res) =>{
            
            return res.json();
        }).then(res => {
            setUsers(res);
        });
    }, []);

    return (
            <React.Fragment>
                <table>
                    <thead>
                        <tr key={i++} className="tr-head">
                            <th key={i++} className="th-head">ID</th>
                            <th key={i++} className="th-head">AVATAR</th>
                            <th key={i++} className="th-head">NAME</th>
                            <th key={i++} className="th-head">SURNAME</th>
                            <th key={i++} className="th-head">ADDRESS</th>
                            <th key={i++} className="th-head">EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) =>{
                            return(

                                <tr key={i++} className="tr-user">
                                    <td className="td-user" key={i++}>{user.id}</td>
                                    
                                    <td className="td-user" key={i++}><img  width={30} height={30}src={"http://127.0.0.1:8000/images/avatars/1659909830689_img.png"} alt={"avatar"+ i}></img></td>
                                    
                                    <td className="td-user" key={i++}>{user.firstName}</td>
                                    
                                    <td className="td-user" key={i++}>{user.lastName}</td>
                                    
                                    <td className="td-user" key={i++}>{user.address}</td>

                                    <td className="td-user" key={i++}>{user.email}</td>
                                </tr>
                        );})}
                    </tbody>
                </table>
                    
            </React.Fragment>
        );
}


export default Users;