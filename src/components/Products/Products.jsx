import React, {useEffect, useState} from "react";

import "./Products.css";
function Products(props){
    const [products, setProducts] = useState([]);

    useEffect(() => {
        fetch('http://127.0.0.1:8000/api/products').then((res) =>{
            
            return res.json();
        }).then(res => {

            setProducts(res);
        });
    }, []);

    return (
        <React.Fragment>
            <div className ="card-body">
            <div className="table-responsive">
                <table className="table table-bordered">
                    <thead>
                        <tr>
                            <th>ID</th>
                            <th>NOMBRE</th>
                            <th>IMAGEN</th>
                            <th>PRECIO</th>
                            <th>CANTIDAD</th>
                            <th>DESCRIPCIÓN</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product,i) =>{
                            return(
                                <tr key={i} >
                                    <td >{product.id}</td>
                                    <td>{product.name}</td>
                                    <td><img  width={30} height={30}src={"http://127.0.0.1:8000/images/avatars/1659909830689_img.png"} alt={"avatar"+ i}></img></td>
                                    <td>{product.price}</td>
                                    <td>{product.quantity}</td>
                                    <td>{product.description}</td>
                                </tr>
                        );})}
                    </tbody>
                </table>
                    
            </div>
            </div>
            
        </React.Fragment>
        );
}


export default Products;