import { gql } from "@apollo/client";

export const STORIES = gql`
  query getSories {
    stories {
      id
      by
      descendants
      kids
      score
      time
      title
      type
      url
    }
  }
`;
