import React from 'react';

import Header from './components/common/Header';
import Footer from './components/common/Footer';
import Routes from './components/routes/Routes';

function App () {

	return (
		<div>
			<Header/>

			<main>
				<Routes />
			</main>

			<Footer/>
		</div>
	);

}

export default App;