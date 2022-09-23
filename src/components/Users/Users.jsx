import {useEffect, useState} from "react";

import "./Users.css"
function Users(props){
    const [users, setUsers] = useState([]);
    let i = 0;
    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/users').then((res) =>{
            
            return res.json();
        }).then(res => {
            console.log(res[0]);
            setUsers(res);
        });
    }, []);

    return (
            <div>
                <table>
                    <thead>
                        <tr className="tr-head">
                            <th className="th-head">ID</th>
                            <th className="th-head">AVATAR</th>
                            <th className="th-head">NAME</th>
                            <th className="th-head">SURNAME</th>
                            <th className="th-head">ADDRESS</th>
                            <th className="th-head">EMAIL</th>
                        </tr>
                    </thead>
                    <tbody>
                        {users.map((user) =>{
                            return(

                                <tr className="tr-user">
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
                    
            </div>
        );
}


export default Users;