import { gql } from "@apollo/client";

export const ADD_TO_FAVS = gql`
  mutation AddToFav($userEmail: String!, $storyId: String!) {
    addToFav(userEmail: $userEmail, storyId: $storyId)
  }
`;
