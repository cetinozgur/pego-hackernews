import { gql } from "apollo-server";

export const typeDefs = gql`
  type Query {
    #storyIds: [Int!]!
    stories: [Story!]!
    story(id: ID!): Story
  }

  type Story {
    id: ID!
    by: User
    descendants: Int
    kids: [Int!]
    score: Int
    time: Int
    title: String!
    type: String!
    url: String
  }

  type User {
    id: ID!
    about: String
    created: Int
    delay: Int
    karma: Int
    submitted: [Int!]
  }

  type Comment {
    id: ID!
    by: User
    kids: [Int]
    parent: Int
    text: String!
    time: Int
    type: String
  }
`;
