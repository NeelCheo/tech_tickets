import React from 'react';
import { useQuery } from '@apollo/client';
import OpenTickets from '../../components/OpenTickets/index';
import { QUERY_TICKETS } from '../../../src/utils/queries';
import "../styles/Submit.css"





const TicketList = () => {
    // Execute the query on component load
    const { loading, data } = useQuery(QUERY_TICKETS);
  
    
    const tickets = data?.tickets || [];
  
    return (
      <main>
        <div className="flex-row justify-center" class = "tix">
          <div className="col-3 mb-3 ">
            {/* If the data is still loading, render a loading message */}
            {loading ? (
              <div>Loading...</div>
            ) : (
              <OpenTickets 
                tickets={tickets}
                title="Tickets awaiting assignment"
              />
            )}
          </div>
        </div>
      </main>
    );
  };
  
  export default TicketList;