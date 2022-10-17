import React from 'react';
import './App.css';
import Navbar from './components/Navbar';
import { BrowserRouter as Router, Routes, Route, Switch } from 'react-router-dom';
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
	<Switch>
		<Route path='/' exact element={<Aktuelles/>} />
		<Route path='/platzreservierung' component={Platzreservierung} />
		<Route path='/mitgliedschaft' component={Mitgliedschaft} />
		<Route path='/training' component={Training} />
		<Route path='/mannschaftsmeisterschaft' component={Mannschaftsmeisterschaft} />
		<Route path='/ueber-uns' component={UeberUns} />
		<Route path='/kontakt' component={Kontakt} />
	</Switch>
	</Router>
);
}

export default App;
