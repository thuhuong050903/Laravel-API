
import React from 'react';
import Header from './components/Home/Header';
import Slide from './components/Home/Slide';
import Content from './components/Home/Content';
import Footer from './components/Home/Footer';

class HomePage extends React.Component {
	render() {
		return (
		<div>
			<Header />
			<Slide />
			<Content />
			<Footer />
		</div>
	);
}
}

export default HomePage;
