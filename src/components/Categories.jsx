import {useEffect, useState} from "react";

function Categories(props){
    let [categories, setCategories] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/users').then((res) =>{
            
            return res.json();
        }).then(res => {

            setCategories(res);
        });
    }, []);

    return (
            <div>
                <p>{categories[2].firstName}</p>
            </div>
        );
}


export default Categories;