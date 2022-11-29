import { gql } from "@apollo/client";

export const GET_USER_FAVS = gql`
  query UserFavs($userEmail: String!) {
    userFavs(userEmail: $userEmail) {
      id
      by {
        id
        about
        created
        karma
        delay
        submitted
      }
      descendants
      score
      time
      title
      url
    }
  }
`;
