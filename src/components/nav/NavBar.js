import React from 'react';
import {NavLink, withRouter} from 'react-router-dom';
import './NavBar.css';

const NavBar = ({hasUser, clearUser, history, searchNode, handleSearch}) => {
	const handleLogout = () => {
		clearUser();
		history.push('/');
	};


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
							activeClassName='active-link'>
							Home
						</NavLink>
					</li>
					{hasUser ? (
						<li>
							<NavLink className='nav-link' to='/animals'>
								Animals
							</NavLink>
						</li>
					) : null}
					<li>
						<NavLink className='nav-link' to='/locations'>
							Locations
						</NavLink>
					</li>
					{hasUser ? (
						<li>
							<NavLink className='nav-link' to='/employees'>
								Employees
							</NavLink>
						</li>
					) : null}
					{hasUser ? (
						<li>
							<NavLink className='nav-link' to='/owners'>
								Owners
							</NavLink>
						</li>
					) : null}
					{hasUser ? (
						<li>
							<span className='nav-link' onClick={handleLogout}>
								Logout
							</span>
						</li>
					) : null}
					{hasUser ? (
						<li>
							<input ref={searchNode} type="text" onKeyUp={(evt) => {
								handleSearch(evt, history)
								
								}}>
							</input>
						</li>
					) : null}
					{!hasUser ? (
						<li>
							<NavLink className='nav-link' to='/login'>
								Login
							</NavLink>
						</li>
					) : null}
				</ul>
			</nav>
		</header>
	);
};

export default withRouter(NavBar);
