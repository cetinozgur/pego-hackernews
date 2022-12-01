import { gql } from "@apollo/client";

export const GET_FEED_BY_TYPE = gql`
  query GetFeedByType($feedType: String!, $limit: Int, $offset: Int) {
    feed(feedType: $feedType, limit: $limit, offset: $offset) {
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

export const GET_COMMENTS_BY_STORY_ID = gql`
  query GetCommentsByStoryId($storyId: ID!, $limit: Int, $offset: Int) {
    comments(storyId: $storyId, limit: $limit, offset: $offset) {
      id
      text
      time
      by {
        id
        about
        created
        karma
        delay
        submitted
      }
      kids
    }
  }
`;

export const GET_AUTHOR_DETAILS = gql`
  query GetAuthorDetails($userId: ID!) {
    user(id: $userId) {
      id
      about
      created
      karma
      delay
      submitted
    }
  }
`;

export const GET_FAVS_OF_USERS = gql`
  query getFavsOfUsers($userEmail: String!) {
    getFavsOfUsers(userEmail: $userEmail) {
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
