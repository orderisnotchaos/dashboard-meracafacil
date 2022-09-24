import React, { useEffect, useState } from 'react';
import Products from '../Products/Products';
import TopBar from '../TopBar/TopBar';
import TotalPanel from '../TotalPanels/TotalPanel';
import './ContentWrapper.css';
function ContentWrapper(){
    const [users, setUsers]=useState([]);
    const [products, setProducts] = useState([]);

    useEffect(() => {

        fetch('http://127.0.0.1:8000/api/users').then((res) =>{
            
            return res.json();
        }).then(res => {

            setUsers(res);
        });

        fetch('http://127.0.0.1:8000/api/products').then((res) =>{
            
            return res.json();
        }).then(res => {

            setProducts(res);
        });
    }, []);

    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <TopBar />
                    <div className="row">
                        <TotalPanel title= "Total de Usuarios" cuantity={users.length}/>
                        <TotalPanel title= "Total de Productos" cuantity={products.length}/>
                    </div>
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;