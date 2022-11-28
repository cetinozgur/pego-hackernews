import { gql } from "@apollo/client";

export const GET_STORIES_BY_TYPE = gql`
  query GetStories($storyType: String!, $offset: Int, $limit: Int) {
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
