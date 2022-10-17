import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'; 
import Aktuelles from './pages';
import Platzreservierung from './pages/platzreservierung';
import Mitgliedschaft from './pages/mitgliedschaft';
import Training from './pages/training';
import Mannschaftsmeisterschaft from './pages/mannschaftsmeisterschaft';
import UeberUns from './pages/ueber-uns';
import Kontakt from './pages/kontakt';

function App() {
return (
	<Router>
	<Navbar />
	<Routes>
		<Route path='/' exact element={<Aktuelles/>} />
		<Route path='/platzreservierung' element={<Platzreservierung/>} />
		<Route path='/mitgliedschaft' element={<Mitgliedschaft/>} />
		<Route path='/training' element={<Training/>} />
		<Route path='/mannschaftsmeisterschaft' element={<Mannschaftsmeisterschaft/>} />
		<Route path='/ueber-uns' element={<UeberUns/>} />
		<Route path='/kontakt' element={<Kontakt/>} />
	</Routes>
	</Router>
);
}

export default App;
