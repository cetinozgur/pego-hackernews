import { gql } from "@apollo/client";
import { graphql } from "@/gql";

export const GET_STORIES_BY_TYPE = gql`
  query GetStoriesByType($storyType: String!, $offset: Int, $limit: Int) {
    stories(storyType: $storyType, offset: $offset, limit: $limit) {
      id
      by {
        id
        karma
      }
      descendants
      score
      time
      title
      url
    }
  }
`;

export const GET_COMMENTS_BY_STORY_ID = gql`
  query GetCommentsByStoryId($storyId: ID!, $limit: Int, $offset: Int) {
    comments(storyId: $storyId, limit: $limit, offset: $offset) {
      id
      text
      time
      by
      kids
    }
  }
`;
