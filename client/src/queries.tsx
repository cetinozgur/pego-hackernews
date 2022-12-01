import { gql } from "@apollo/client";

export const GET_FEED_BY_TYPE = gql`
  query GetFeedByType($offset: Int!, $limit: Int!, $feedType: String!) {
    feed(offset: $offset, limit: $limit, feedType: $feedType) {
      id
      by
      descendants
      score
      time
      title
      url
    }
  }
`;

export const GET_FAVS_OF_USERS = gql`
  query getFavsOfUsers($offset: Int!, $limit: Int!, $userEmail: String!) {
    getFavsOfUsers(offset: $offset, limit: $limit, userEmail: $userEmail) {
      id
      by
      descendants
      score
      time
      title
      url
    }
  }
`;

export const GET_IDS_OF_USERS_FAVS = gql`
  query getIdsOfUsersFavs($userEmail: String!) {
    getIdsOfUsersFavs(userEmail: $userEmail)
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

export const GET_AUTHOR_DETAILS = gql`
  query Author($authorId: String!) {
    author(authorId: $authorId) {
      id
      about
      created
      karma
      submitted
    }
  }
`;

export const GET_COMMENTS_BY_STORY_ID = gql`
  query GetCommentsByStoryId($storyId: ID!, $limit: Int, $offset: Int) {
    comments(storyId: $storyId, limit: $limit, offset: $offset) {
      id
      text
      time
      by
      kids
    }
  }
`;
