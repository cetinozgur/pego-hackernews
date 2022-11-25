import { gql } from "@apollo/client";
import { graphql } from "@/gql";

export const STORIES = graphql(/* GraphQL */ `
  query getSories {
    stories {
      id
      by {
        id
        about
        delay
        created
        karma
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
