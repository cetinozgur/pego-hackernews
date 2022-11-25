import { graphql } from "@/gql";

export const GET_STORIES = graphql(/* GraphQL */ `
  query GetStories {
    stories {
      id
      by {
        id
      }
      descendants
      kids
      score
      time
      title
      type
      url
    }
  }
`);
