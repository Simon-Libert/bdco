import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from './pages/Home';
import Profil from './pages/Profil';

const App = () => {
	return (
		<BrowserRouter>
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/profil' element={<Profil />} />
				<Route path='*' element={<Navigate replace to='/home' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
