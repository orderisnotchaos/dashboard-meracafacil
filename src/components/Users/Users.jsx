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
            <div className ="card-body">
             <div className=".table-responsive-user">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                             <th>ID</th>
                             <th>AVATAR</th>
                             <th>FIRST NAME</th>
                             <th>LAST NAME</th>
                             <th>ADDRESS</th>
                             <th>EMAIL</th>
                         </tr>
                    </thead>
                    <tbody>
                        {users.map((user,i) =>{
                            return(
                                <tr key={i} >
                                    <td className="td-user" key={i++} >{user.id}</td>
                                    <td className="td-user" key={i++}><img  width={40} height={40}src={"http://127.0.0.1:8000/images/avatars/1659909830689_img.png"} alt={"avatar"+ i}></img></td>
                                    <td className="td-user" key={i++}>{user.firstName}</td>
                                    <td className="td-user" key={i++}>{user.lastName}</td>
                                    <td className="td-user" key={i++}>{user.address}</td>
                                    <td className="td-user" key={i++}>{user.email}</td>
                                </tr>
                        );})}
                    </tbody>
                </table>
                    
             </div>
            </div>
            
        </React.Fragment>
        );
}


export default Users;