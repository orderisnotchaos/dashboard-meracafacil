import React from 'react';

import './SideBar.css';
import {Link, Route, Routes} from 'react-router-dom';
import Products from '../Products/Products';
import Users from '../Users/Users';
import NotFound from '../NotFound/NotFound';
import ContentWrapper from '../ContentWrapper/ContentWrapper';
function SideBar(){
    return(
        <React.Fragment>
            <div className='sidebar'>

                <Link to ={'/'} className= "clean-link sidebar-heading"><img src='logo-banner-transparente.png' className='w-100' alt='merca-fácil'></img></Link>

                <hr></hr>

                <Link to={'/'} className="clean-link sidebar-heading"> <span> Dashboard - Merca Fácil</span></Link>

                <hr></hr>
                <Link to={'/products'} className="sidebar-heading clean-link"><span>Productos</span></Link>
                <hr></hr>
                <Link to={'/'} className="sidebar-heading clean-link"><span>Categorias</span></Link>
                <hr></hr>
                <Link to={'/users'} className="sidebar-heading clean-link"><span>Usuarios</span></Link>
                <hr></hr>
            </div>

            <Routes>
                <Route exact path="/" element={<ContentWrapper />} />
                    
                <Route path="/products" element={< Products/>} />

                <Route path="/users" element={<Users />}/>
                <Route component={NotFound} />
            </Routes>
        </React.Fragment>


    )
}
export default SideBar;