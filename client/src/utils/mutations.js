import { gql } from '@apollo/client';

export const LOGIN = gql`
  mutation login($email: String!, $password: String!) {
    login(email: $email, password: $password) {
      token
      user {
        _id
      }
    }
  }
`;

export const ADD_USER = gql`
  mutation addUser(
    $name: String!
    $userName: String!
    $email: String!
    $password: String!
    $code: String
    $designation: String!
  ) {
    addUser(
      name: $name
      userName: $userName
      email: $email
      password: $password
      code: $code
      designation: $designation
    ) {
      token
      user {
        _id
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
