/* eslint-disable */
import * as types from './graphql';
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';

/**
 * Map of all GraphQL operations in the project.
 *
 * This map has several performance disadvantages:
 * 1. It is not tree-shakeable, so it will include all operations in the project.
 * 2. It is not minifiable, so the string of a GraphQL query will be multiple times inside the bundle.
 * 3. It does not support dead code elimination, so it will add unused operations.
 *
 * Therefore it is highly recommended to use the babel-plugin for production.
 */
const documents = {
    "\n  query GetFeedByType($offset: Int!, $limit: Int!, $feedType: String!) {\n    feed(offset: $offset, limit: $limit, feedType: $feedType) {\n      id\n      by\n      descendants\n      score\n      time\n      title\n      url\n    }\n  }\n": types.GetFeedByTypeDocument,
    "\n  query getFavsOfUsers($offset: Int!, $limit: Int!, $userEmail: String!) {\n    getFavsOfUsers(offset: $offset, limit: $limit, userEmail: $userEmail) {\n      id\n      by\n      descendants\n      score\n      time\n      title\n      url\n    }\n  }\n": types.GetFavsOfUsersDocument,
    "\n  query getIdsOfUsersFavs($userEmail: String!) {\n    getIdsOfUsersFavs(userEmail: $userEmail)\n  }\n": types.GetIdsOfUsersFavsDocument,
    "\n  query GetFeedLength($feedType: String!) {\n    feedLength(feedType: $feedType)\n  }\n": types.GetFeedLengthDocument,
    "\n  query GetFavsOfUsersLength($userEmail: String!) {\n    getFavsOfUsersLength(userEmail: $userEmail)\n  }\n": types.GetFavsOfUsersLengthDocument,
    "\n  query Author($authorId: String!) {\n    author(authorId: $authorId) {\n      id\n      about\n      created\n      karma\n      submitted\n    }\n  }\n": types.AuthorDocument,
    "\n  query GetCommentsByStoryId($storyId: ID!, $limit: Int, $offset: Int) {\n    comments(storyId: $storyId, limit: $limit, offset: $offset) {\n      id\n      text\n      time\n      by\n      kids\n    }\n  }\n": types.GetCommentsByStoryIdDocument,
};

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetFeedByType($offset: Int!, $limit: Int!, $feedType: String!) {\n    feed(offset: $offset, limit: $limit, feedType: $feedType) {\n      id\n      by\n      descendants\n      score\n      time\n      title\n      url\n    }\n  }\n"): (typeof documents)["\n  query GetFeedByType($offset: Int!, $limit: Int!, $feedType: String!) {\n    feed(offset: $offset, limit: $limit, feedType: $feedType) {\n      id\n      by\n      descendants\n      score\n      time\n      title\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getFavsOfUsers($offset: Int!, $limit: Int!, $userEmail: String!) {\n    getFavsOfUsers(offset: $offset, limit: $limit, userEmail: $userEmail) {\n      id\n      by\n      descendants\n      score\n      time\n      title\n      url\n    }\n  }\n"): (typeof documents)["\n  query getFavsOfUsers($offset: Int!, $limit: Int!, $userEmail: String!) {\n    getFavsOfUsers(offset: $offset, limit: $limit, userEmail: $userEmail) {\n      id\n      by\n      descendants\n      score\n      time\n      title\n      url\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query getIdsOfUsersFavs($userEmail: String!) {\n    getIdsOfUsersFavs(userEmail: $userEmail)\n  }\n"): (typeof documents)["\n  query getIdsOfUsersFavs($userEmail: String!) {\n    getIdsOfUsersFavs(userEmail: $userEmail)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetFeedLength($feedType: String!) {\n    feedLength(feedType: $feedType)\n  }\n"): (typeof documents)["\n  query GetFeedLength($feedType: String!) {\n    feedLength(feedType: $feedType)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetFavsOfUsersLength($userEmail: String!) {\n    getFavsOfUsersLength(userEmail: $userEmail)\n  }\n"): (typeof documents)["\n  query GetFavsOfUsersLength($userEmail: String!) {\n    getFavsOfUsersLength(userEmail: $userEmail)\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query Author($authorId: String!) {\n    author(authorId: $authorId) {\n      id\n      about\n      created\n      karma\n      submitted\n    }\n  }\n"): (typeof documents)["\n  query Author($authorId: String!) {\n    author(authorId: $authorId) {\n      id\n      about\n      created\n      karma\n      submitted\n    }\n  }\n"];
/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 */
export function graphql(source: "\n  query GetCommentsByStoryId($storyId: ID!, $limit: Int, $offset: Int) {\n    comments(storyId: $storyId, limit: $limit, offset: $offset) {\n      id\n      text\n      time\n      by\n      kids\n    }\n  }\n"): (typeof documents)["\n  query GetCommentsByStoryId($storyId: ID!, $limit: Int, $offset: Int) {\n    comments(storyId: $storyId, limit: $limit, offset: $offset) {\n      id\n      text\n      time\n      by\n      kids\n    }\n  }\n"];

/**
 * The graphql function is used to parse GraphQL queries into a document that can be used by GraphQL clients.
 *
 *
 * @example
 * ```ts
 * const query = gql(`query GetUser($id: ID!) { user(id: $id) { name } }`);
 * ```
 *
 * The query argument is unknown!
 * Please regenerate the types.
**/
export function graphql(source: string): unknown;

export function graphql(source: string) {
  return (documents as any)[source] ?? {};
}

export type DocumentType<TDocumentNode extends DocumentNode<any, any>> = TDocumentNode extends DocumentNode<  infer TType,  any>  ? TType  : never;