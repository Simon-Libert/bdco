import React, { useContext } from 'react';
import { NavLink } from 'react-router-dom';
import { UidContext } from '../components/AppContext';

const Navbar = () => {
	const uid = useContext(UidContext); // récupère l'id du user s'il est co

	return (
		<nav>
			<div className='Nav-container'>
				<div className='logo'>
					<NavLink exact to='/'>
						<div className='logo'>
							<img src='./img/logo_small.png' alt='logo' />
							<h3>BDCO</h3>
						</div>
					</NavLink>
				</div>
				{uid ? (
					<ul>
						<li></li>
						<li className='welcome'>
							<NavLink exact to='/profil'>
								<h3>Bienvenue {uid}</h3>
							</NavLink>
						</li>
						Logo logout
					</ul>
				) : (
					<ul>
						<li></li>
						<li>
							<NavLink exact to='/profil'>
								<img src='./img/icons/login.svg' alt='login' />
							</NavLink>
						</li>
					</ul>
				)}
			</div>
		</nav>
	);
};

export default Navbar;
