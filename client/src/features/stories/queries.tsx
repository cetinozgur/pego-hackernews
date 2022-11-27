import { graphql } from "@/gql";

export const GET_STORIES_BY_TYPE = graphql(/* GraphQL */ `
  query GetStories($storyType: String!) {
    stories(storyType: $storyType) {
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
`);
