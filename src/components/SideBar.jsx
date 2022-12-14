import React from 'react';

import {Link} from 'react-router-dom';

function SideBar(){
    return(
        <React.Fragment>
           <ul>
                <li>
                    <img src='logo-banner-transparente.png' alt='merca-fácil'></img>
                </li>

                <hr></hr>
                <li>
                    <Link to={'/'}> <span> Dashboard - Merca Fácil</span></Link>
                </li>
                <hr></hr>

                <div className="sidebar-heading">Productos</div>
                <hr></hr>

                <div className="sidebar-heading">Categorias</div>
                <hr></hr>
                
                <div className="sidebar-heading">Usuarios</div>
                <hr></hr>
           </ul>
        </React.Fragment>
    )
}
export default SideBar;