import React from 'react';
import { NavLink } from 'react-router-dom';

const Navbar = () => {
	return (
		<nav>
			<div className='Nav-container'>
				<div className='logo'>
					<NavLink to='/'>
						<div className='logo'>
							<img src='./img/logo_small.png' alt='icon' />
							<h3>BDCO</h3>
						</div>
					</NavLink>
				</div>
			</div>
		</nav>
	);
};

export default Navbar;
