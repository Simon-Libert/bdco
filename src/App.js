import React, { useEffect, useState } from 'react';
import Routes from './components/Routes';
import { UidContext } from './components/AppContext';
import axios from 'axios';

const App = () => {
	const [uid, setUid] = useState('');

	useEffect(() => {
		const fetchToken = async () => {
			await axios({
				method: 'GET',
				url: `${process.env.REACT_APP_API_URL}jwtid`,
				withCredentials: true,
			})
				.then((res) => setUid(res.data))
				.catch((err) => console.log('No token found.'));
		};
		fetchToken();
	}, []); // le tableau vide est un callback qui sera appelé une seule fois au chargement de la page

	return (
		<UidContext.Provider value={uid}>
			<Routes />
		</UidContext.Provider>
	);
};

export default App;
