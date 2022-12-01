import { gql } from "@apollo/client";

export const GET_FEED_BY_TYPE = gql`
  query GetFeedByType($offset: Int!, $limit: Int!, $feedType: String!) {
    feed(offset: $offset, limit: $limit, feedType: $feedType) {
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

export const GET_FEED_LENGTH_BY_TYPE = gql`
  query GetFeedLength($feedType: String!) {
    feedLength(feedType: $feedType)
  }
`;
export const GET_USER_FAVS_FEED_LENGTH = gql`
  query GetFavsOfUsersLength($userEmail: String!) {
    getFavsOfUsersLength(userEmail: $userEmail)
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
