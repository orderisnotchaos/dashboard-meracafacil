import {useEffect, useState} from "react";

let user = {
    id: 9999999,
    firstName: 'null',
    lastName: 'null',
    email: 'null',
    password: 'null',
    phone: 'null',
    address: 'null',
    avatar : 'null',
    isAdmin: 2

}
function Users(props){
    const [users, setUsers] = useState([user]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/users').then((res) =>{
            
            return res.json();
        }).then(res => {

            setUsers(res);
        });
    }, []);

    return (
            <div>
                {users.map((user) =>{
                    return(
                    <ul>
                        <li>{user.firstName}</li>
                        <li>{user.lastName}</li>
                        <li>{user.avatar}</li>
                    </ul>);})}
            </div>
        );
}


export default Users;