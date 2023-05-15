import React from 'react';

const OpenTickets = ({ tickets, title, userName, issues, devices, status }) => {
  if (!tickets.length) {
    return <h3>No Open Tickets</h3>;
  }

  return (
    <div>
      <h3>{title}</h3>
      {tickets &&
        tickets.map((tickets) => (
          <div key={tickets._id} className="card mb-3">
            <h4 className="card-header bg-primary text-light p-2 m-0">
              {tickets.userName} <br />
              <span style={{ fontSize: '1rem' }}>
                Device: {tickets.devices}
                description : {tickets.title}
              </span>
            </h4>
            <div className="card-body bg-light p-2">
              <p>{tickets.issues}</p>
            </div>
          </div>
        ))}
    </div>
  );
};

export default OpenTickets;