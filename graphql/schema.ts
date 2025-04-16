import { gql } from "graphql-tag";

export const typeDefs = gql`
  type User {
    id: String!
    name: String!
    email: String!
    posts: [Post!]!
  }

  type Post {
    id: String!
    title: String!
    content: String!
    published: Boolean!
    author: User!
  }

  type Query {
    users: [User!]!
    posts: [Post!]!
  }
`;
