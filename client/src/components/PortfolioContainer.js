import React, { useState } from 'react';
import NavTabs from './NavTabs';
import Home from './pages/Home';
import Login from './pages/Login';
import Signup from './pages/Signup';
import Ticket from './pages/TicketForm';
import TicketList from "./pages/Opentix";

import Header from './Header';


//import '../styles/Container.css'

export default function PortfolioContainer() {
	const [currentPage, setCurrentPage] = useState('About');

	// This method is checking to see what the value of `currentPage` is. Depending on the value of currentPage, we return the corresponding component to render.
	const renderPage = () => {
		if (currentPage === 'Signup') {
			return <Signup />;
		}
		if (currentPage === 'Login') {
			return <Login />;
		}
		if (currentPage === 'Ticket') {
			return <Ticket />;
		}
    if (currentPage === 'Open') {
			return <TicketList />;
		}
		return <Home />;
	};

	const handlePageChange = (page) => setCurrentPage(page);

	return (
		<div id="page-container">
			<div id="content-wrapper">
				{/* We are passing the currentPage from state and the function to update it */}
				<Header />
				<NavTabs
					currentPage={currentPage}
					handlePageChange={handlePageChange}
				/>
				{/* Here we are calling the renderPage method which will return a component  */}
				{renderPage()}
			</div>
		</div>
	);
}
