import React from 'react';
import { BrowserRouter, Routes, Route, Navigate } from 'react-router-dom';
import Home from '../../pages/Home';
import Profil from '../../pages/Profil';
import Navbar from '../../components/Navbar';

const App = () => {
	return (
		<BrowserRouter>
			<Navbar />
			<Routes>
				<Route path='/home' element={<Home />} />
				<Route path='/profil' element={<Profil />} />
				<Route path='*' element={<Navigate replace to='/home' />} />
			</Routes>
		</BrowserRouter>
	);
};

export default App;
