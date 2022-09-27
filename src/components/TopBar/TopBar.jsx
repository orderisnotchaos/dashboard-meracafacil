import React from 'react';
import foto from '../../assets/images/jordan-walke.png';
import './TopBar.css'
function TopBar(){
    return(
        <React.Fragment>
				{/*<!-- Topbar -->*/}
				<nav className="navbar">

					{/*<!-- Topbar Navbar -->*/}
					<ul className="navbar-nav">

						{/*<!-- Nav Item - Alerts -->*/}
						<li >
							<a href="/" id="alertsDropdown">
								<i className="fas fa-bell fa-fw"></i>
								{/*<!-- Counter - Alerts -->*/}
								<span className="badge badge-danger badge-counter">3+</span>
							</a>
						</li>

						{/*<!-- Nav Item - Messages -->*/}
						<li className="nav-item dropdown no-arrow mx-1">
							<a className="nav-link dropdown-toggle" href="/" id="messagesDropdown">
								<i className="fas fa-envelope fa-fw"></i>
								{/*<!-- Counter - Messages -->*/}
								<span className="badge badge-danger badge-counter">7</span>
							</a>
						</li>

						<div className="topbar-divider"></div>

						{/*<!-- Nav Item - User Information -->*/}
						<li className="nav-item dropdown no-arrow">
							<a className="nav-link dropdown-toggle clean-link" href="/" id="userDropdown">
								<span className="mr-2 d-none d-lg-inline text-gray-600 small">¡Bienvenido!</span>
								<img className="img-profile rounded-circle" src={foto} alt="Jordan Walke - Creador de React" width="60"/>
							</a>
						</li>

					</ul>

				</nav>
				{/*<!-- End of Topbar -->*/}

        </React.Fragment>
    )
}
export default TopBar;