import React from 'react';
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import Login from './pages/Login';
import SignUp from './pages/Signup';

const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});

function App() {
	return (
		<ApolloProvider client={client}>
			<Router>
				<div className="flex-column justify-flex-start min-100-vh">
					{/* <Header /> */}
					<div className="container">
						<Routes>
							{/* <Route path="/" element={<Home />} /> */}
							<Route path="/" element={<Login />} />
							<Route path="/signup" element={<SignUp />} />
							{/* <Route path="/thoughts/:thoughtId" element={<SingleThought />} /> */}
						</Routes>
					</div>
					{/* <Footer /> */}
				</div>
			</Router>
		</ApolloProvider>
	);
}

export default App;
