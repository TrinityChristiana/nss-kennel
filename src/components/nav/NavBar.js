import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import './NavBar.css';

const NavBar = () => {

	return (
		<header>
			<h1 className='site-title'>
				Student Kennels
				<br />
				<small>Loving care when you're not there.</small>
			</h1>
			<nav>
				<ul className='container'>
					<li>
						<NavLink
							className='nav-link'
							to='/home'
							activeClassName='active-link'
							>
							Home
						</NavLink>
					</li>
					<li>
						<NavLink
							className='nav-link'
							to='/animals'
							activeClassName='active-link'
							>
							Animals
						</NavLink>
					</li>
					<li>
						<NavLink
							className='nav-link'
							to='/locations'
							activeClassName='active-link'
							>
							Locations
						</NavLink>
					</li>
					<li>
						<NavLink
							className='nav-link'
							to='/employees'
							activeClassName='active-link'
							>
							Employees
						</NavLink>
					</li>
					<li>
						<NavLink
							className='nav-link'
							to='/owners'
							activeClassName='active-link'
							>
							Owners
						</NavLink>
					</li>
				</ul>
			</nav>
		</header>
	);
};

export default withRouter(NavBar);
