import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($userName: String!, $password: String!) {
    login(userName: $userName, password: $password) {
      token
      user {
        userName
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $userName: String!
    $email: String!
    $password: String!
    $name: String!
    $phone: String!
  ) {
    addUser(
      userName: $userName
      email: $email
      password: $password
      name: $name
      phone: $phone
      tickets {
        title
        devices
        issues
        status
      }
    ) {
      token
      user {
        userName
      }
    }
  }
`;

export const ADD_TICKET = gql`
  mutation addTicket($title: String!, $userName: String!, adminID: String!, devices: String!, issues: String!, status: String!) {
    addTicket(title: $title, userName: $userName, adminId: $adminId, devices: $devices, issues: $issues, status: $status) {
      _id
      title
      userName
      adminId
      devices
      issues
      status
      }
    }
  }
`;
