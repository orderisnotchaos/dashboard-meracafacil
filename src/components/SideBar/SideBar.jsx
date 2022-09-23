import React from 'react';

import './SideBar.css';
import {Link} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
            <div className='sidebar'>

                <img src='logo-banner-transparente.png' className='w-100' alt='merca-fácil'></img>

                <hr></hr>

                <Link to={'/'} className="clean-link sidebar-heading"> <span> Dashboard - Merca Fácil</span></Link>

                <hr></hr>
                <Link to={'/Products'} className="sidebar-heading clean-link"><span>Productos</span></Link>
                <hr></hr>
                <Link to={'/Categories'} className="sidebar-heading clean-link"><span>Categorias</span></Link>
                <hr></hr>
                <Link to={'/Users'} className="sidebar-heading clean-link"><span>Usuarios</span></Link>
                <hr></hr>
            </div>
        </React.Fragment>
    )
}
export default SideBar;