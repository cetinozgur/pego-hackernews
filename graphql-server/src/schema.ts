import { gql } from "apollo-server";

export const typeDefs = gql`
  type Story {
    id: ID!
    by: String!
    descendants: Int
    kids: [Int!]!
    score: Int
    time: Int
    title: String!
    type: String!
    url: String!
  }

  type Query {
    stories: [Story!]!
  }
`;
