import React from 'react';

import { AboutUs, FindUs, Footer, Gallery, Header, Popular } from './container';
import { Navbar } from './components';
import './App.css';

const App = () => (
	<div>
		<Navbar />
		<Header />
		<AboutUs />
		<Popular />
		<FindUs />
		<Gallery />
		<Footer />
	</div>
);

export default App;
