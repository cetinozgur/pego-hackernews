import { gql } from "@apollo/client";

export const CREATE_USER = gql`
  mutation CreateUser($userEmail: String!) {
    createUser(userEmail: $userEmail)
  }
`;

export const ADD_TO_FAVS = gql`
  mutation AddToFav($userEmail: String!, $storyId: String!) {
    addToFav(userEmail: $userEmail, storyId: $storyId)
  }
`;
