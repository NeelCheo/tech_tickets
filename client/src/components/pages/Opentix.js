import React from 'react';
//import QUERY TICKETS



export default function TicketList() {
  return (

      <ul className="list-group">
      {arr.map((project) => (
        <Project project = {project} key = {project.name} />
      ))}
    </ul>
  )
  
}
//have to map over tickets
