import { gql } from '@apollo/client';

export const QUERY_USER = gql`
  query user($userName: String!) {
    user(username: $username) {
      _id
      name
      userName
      tickets {
        title
        userName
        adminId
        devices
        issues
        status
      }
      email
      
    }
  }
`;

export const QUERY_USERS = gql`
  query matchups($_id: String) {
    matchups(_id: $_id) {
      _id
      tech1
      tech2
      tech1_votes
      tech2_votes
    }
  }
`;

export const QUERY_TICKETS = gql`
  query getTickets {
    tickets {
      title
      userName
      adminId
    }
  }
`;
