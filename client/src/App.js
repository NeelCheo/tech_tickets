import React from "react";
import PortfolioContainer from "./components/PortfolioContainer";
import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { ApolloClient, ApolloProvider, InMemoryCache } from '@apollo/client';

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
