import React, { useContext } from 'react';
import Log from '../components/Log';
import { UidContext } from '../components/AppContext';

const Profil = () => {
	const uid = useContext(UidContext); // permet de récupérer l'id du user s'il est co
	return (
		<div className='profil-page'>
			{uid ? (
				<h1>UPDATE PAGE</h1>
			) : (
				<div className='log-container'>
					<Log signin={false} signup={true} />
					<div className='img-container'>
						<img src='./img/logo_big.png' alt='img-log' />
					</div>
				</div>
			)}
		</div>
	);
};

export default Profil;
