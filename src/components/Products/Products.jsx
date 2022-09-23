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
            <div>
                <table className="table">
                    <thead>
                        <tr className="tr-head">
                            <th className="th-head">ID</th>
                            <th className="th-head">NAME</th>
                            <th className="th-head">IMAGE</th>
                            <th className="th-head">PRICE</th>
                            <th className="th-head">QUANTITY</th>
                            <th className="th-head">DESCRIPTION</th>
                        </tr>
                    </thead>
                    <tbody>
                        {products.map((product,i) =>{
                            return(

                                <tr key={i} className="tr-product">
                                    <td className="td-product" >{product.id}</td>
                                    
                                    <td className="td-product" >{product.name}</td>

                                    <td className="td-product" ><img  width={30} height={30}src={"http://127.0.0.1:8000/images/avatars/1659909830689_img.png"} alt={"avatar"+ i}></img></td>
                                    
                                    <td className="td-product" >{product.price}</td>
                                    
                                    <td className="td-product" >{product.quantity}</td>

                                    <td className="td-product" >{product.description}</td>
                                </tr>
                        );})}
                    </tbody>
                </table>
                    
            </div>
        </React.Fragment>
        );
}


export default Products;