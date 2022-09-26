import React, { useEffect, useState } from 'react';
import TopBar from '../TopBar/TopBar';
import TotalPanel from '../TotalPanels/TotalPanel';
import ResponsiveContainer from '../ResponsiveContainer/ResponsiveContainer';
import LastProductInDB from '../LastProductInDB/LastProductInDB';
import Categories from '../Categories/Categories';
import './ContentWrapper.css';

function ContentWrapper(){
    const [users, setUsers]=useState([]);
    const [products, setProducts] = useState([]);
    const [categories, setCategories] = useState([]);
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

        fetch('http://127.0.0.1:8000/api/categories').then((res) =>{
            
            return res.json();
        }).then(res => {

            setCategories(res);
        });
    }, []);

    return (
        <React.Fragment>
            {/*<!-- Content Wrapper -->*/}
            <div id="content-wrapper" className="d-flex flex-column">
                {/*<!-- Main Content -->*/}
                <div id="content">
                    <div className="row">
                        <TopBar />
                    </div>

                    <div className="row-2">
                        <h1 className="center-left gray-faded">App Dashboard</h1>
                    </div>

                    <div className="row-2">
                        <TotalPanel icon = "fa-solid fa-circle-user" title="Total de Usuarios" color="blue" cuantity={users.length}/>
                        <TotalPanel icon = "fa-solid fa-cart-shopping" title="Total de Productos" color="red" cuantity={products.length}/>
                        <TotalPanel icon = "fa-solid fa-clipboard" title="Total de Categorias" color="green" cuantity={categories.length}/>
                    </div>

                    <div className="row-2">
                        
                        <ResponsiveContainer>
                            <LastProductInDB img={`http://127.0.0.1:8000/images/avatars/1659909830689_img.png`}
                                             desc= {products.length !== 0 ? products[products.length-1].description : ""}
                                             title={products.length !== 0 ? products[products.length-1].name : ""}
                                             />
                        </ResponsiveContainer>
                        <ResponsiveContainer>
                            <Categories categories={categories} />
                        </ResponsiveContainer>
                    </div>
                </div>
            </div>    
        </React.Fragment>
    )
}
export default ContentWrapper;