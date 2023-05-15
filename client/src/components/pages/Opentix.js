import React from 'react';
//import QUERY TICKETS
import { useQuery } from '@apollo/client';
import OpenTickets from '../../components/OpenTickets/index';
import { QUERY_TICKETS } from '../../../src/utils/queries';


// export default function TicketList() {
//   return (

//       <ul className="list-group">
//       {arr.map((project) => (
//         <Project project = {project} key = {project.name} />
//       ))}
//     </ul>
//   )
  
// }
// //have to map over tickets


const TicketList = () => {
    // Execute the query on component load
    const { loading, data } = useQuery(QUERY_TICKETS);
  
    // Use optional chaining to check if data exists and if it has a thoughts property. If not, return an empty array to use.
    const tickets = data?.tickets || [];
  
    return (
      <main>
        <div className="flex-row justify-center">
          <div className="col-12 col-md-8 mb-3">
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