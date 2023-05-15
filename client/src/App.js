import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';
import  'bootstrap/dist/css/bootstrap.min.css';

// import Login from './pages/Login';
// import SignUp from './pages/Signup';


const client = new ApolloClient({
	uri: '/graphql',
	cache: new InMemoryCache(),
});


function App () { 

return (
  <ApolloProvider client={client}>
    <Router>


<PortfolioContainer />;
</Router>
</ApolloProvider>
);


}

export default App;
