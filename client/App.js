import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Home from './src/pages/Home';
import Matchup from './src/pages/Matchup';
import Vote from './src/pages/Vote';
import NotFound from './src/pages/NotFound';
import Login from './src/pages/Login';

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<Router>
			<div className="flex-column justify-center align-center min-100-vh bg-primary">
				<Routes>
					<Route path="/" element={<Home />} />
					<Route path="/login" element={<Login />} />
					<Route path="/matchup" element={<Matchup />} />
					<Route path="/matchup/:id" element={<Vote />} />
					<Route path="*" element={<NotFound />} />
				</Routes>
			</div>
		</Router>
	);
}

export default App;
