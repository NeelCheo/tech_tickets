import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { useMutation, useQuery } from '@apollo/client';
import { QUERY_TECH } from '../utils/queries';
import { CREATE_MATCHUP } from '../utils/mutations';
import { DropdownMenu} from '../utils/dropdown';



const PageTemplate = () => {
  const [selectedMenu, setSelectedMenu] = useState(null);
  const [users, setUsers] = useState([]);
  const [tickets, setTickets] = useState([]);

  const handleMenuSelect = (menu) => {
    setSelectedMenu(menu);
  };

  const handleAddUser = (user) => {
    setUsers([...users, user]);
  };

  const handleAddTicket = (ticket) => {
    setTickets([...tickets, ticket]);
  };

  return (
    <div>
      <h1>Page Template</h1>
      <div>
        <h2>Dropdown Menus</h2>
        <div>
          <label>Select a menu:</label>
          <select value={selectedMenu} onChange={(e) => handleMenuSelect(e.target.value)}>
            <option value="">Select</option>
            <option value="menu1">Menu 1</option>
            <option value="menu2">Menu 2</option>
            <option value="menu3">Menu 3</option>
          </select>
        </div>
      </div>
      <div>
        <h2>User Management</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newUser = e.target.elements.user.value;
            handleAddUser(newUser);
            e.target.reset();
          }}
        >
          <input type="text" name="user" placeholder="Enter a username" />
          <button type="submit">Add User</button>
        </form>
        <ul>
          {users.map((user, index) => (
            <li key={index}>{user}</li>
          ))}
        </ul>
      </div>
      <div>
        <h2>Ticket System</h2>
        <form
          onSubmit={(e) => {
            e.preventDefault();
            const newTicket = e.target.elements.ticket.value;
            handleAddTicket(newTicket);
            e.target.reset();
          }}
        >
          <input type="text" name="ticket" placeholder="Enter a ticket" />
          <button type="submit">Add Ticket</button>
        </form>
        <ul>
          {tickets.map((ticket, index) => (
            <li key={index}>{ticket}</li>
          ))}
        </ul>
      </div>
    </div>
  );
};

export default PageTemplate;