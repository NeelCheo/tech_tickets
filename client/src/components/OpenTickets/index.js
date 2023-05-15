import React from 'react';
import "../styles/Submit.css"

const OpenTickets = ({ tickets, title, userName, issues, devices, status }) => {
  if (!tickets.length) {
    return <h3>No Open Tickets</h3>;
  }

  return (
    <div className='container'>
      <h3>{title}</h3>
      {tickets &&
        tickets.map((tickets) => (
          <div key={tickets._id} className="card mb-3" >
            <h4 className="card-header bg-secondary text-light p-2 m-0">
              {tickets.title} <br />
              
            </h4>
            <div className="card-body bg-light p-2">
                User: {tickets.userName} <br/>
                Device: {tickets.devices} <br/>
                
              <p>{tickets.issues}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OpenTickets;