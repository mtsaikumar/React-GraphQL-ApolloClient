import { gql } from "@apollo/client";

export const LOAD_USERS = gql`
query{
  getAllUsers{
    firstName
    lastName
    email
  }
}
`;

// axios.get(`localhost:3000/users`)
//   .then();

export const COMPANY_DETAILS = gql`
query{
  getAllUsers{
    firstName
    lastName
    email
  }
}
`;