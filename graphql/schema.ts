import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
  }

  type Query {
    users: [User!]!
  }
`;
