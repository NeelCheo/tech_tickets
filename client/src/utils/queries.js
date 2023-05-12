import { gql } from '@apollo/client';



export const QUERY_TICKETS = gql`
  query getTickets {
    tickets {
      title
      userName
      adminId

export const QUERY_USER= gql`
query user($userName: String!) {
  user(userName: $userName) {
    _id
    name
    userName
    password
    tickets{
      _id
      title
      adminId
      devices
      issues
      status

    }
    email
    phone
    Admin
  }
}
`;



export const QUERY_USER= gql`
query user($userName: String!) {
  user(userName: $userName) {
    _id
    name
    userName
    password
    tickets{
      _id
      title
      adminId
      devices
      issues
      status
    }
    email
    phone
    Admin

export const QUERY_USERS = gql`
query Users {
  users {
    _id
    userName
    name
  }
}
`;

export const QUERY_USERS = gql`
query Users {
  users {
    _id
    userName
    name
  }
}
`;