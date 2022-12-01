/* eslint-disable */
import { TypedDocumentNode as DocumentNode } from '@graphql-typed-document-node/core';
export type Maybe<T> = T | null;
export type InputMaybe<T> = Maybe<T>;
export type Exact<T extends { [key: string]: unknown }> = { [K in keyof T]: T[K] };
export type MakeOptional<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]?: Maybe<T[SubKey]> };
export type MakeMaybe<T, K extends keyof T> = Omit<T, K> & { [SubKey in K]: Maybe<T[SubKey]> };
/** All built-in and custom scalars, mapped to their actual values */
export type Scalars = {
  ID: string;
  String: string;
  Boolean: boolean;
  Int: number;
  Float: number;
};

export type Comment = {
  __typename?: 'Comment';
  by: Scalars['String'];
  id: Scalars['ID'];
  kids?: Maybe<Array<Scalars['Int']>>;
  parent: Scalars['Int'];
  text?: Maybe<Scalars['String']>;
  time: Scalars['Int'];
  type?: Maybe<Scalars['String']>;
};

export type Mutation = {
  __typename?: 'Mutation';
  addToFav?: Maybe<Scalars['String']>;
  removeAllFav?: Maybe<Scalars['String']>;
  removeFromFav?: Maybe<Scalars['String']>;
};


export type MutationAddToFavArgs = {
  storyId: Scalars['String'];
  userEmail: Scalars['String'];
};


export type MutationRemoveAllFavArgs = {
  userEmail: Scalars['String'];
};


export type MutationRemoveFromFavArgs = {
  storyId: Scalars['String'];
  userEmail: Scalars['String'];
};

export type Query = {
  __typename?: 'Query';
  author?: Maybe<User>;
  comments?: Maybe<Array<Comment>>;
  feed: Array<Story>;
  feedLength: Scalars['Int'];
  getFavsOfUsers?: Maybe<Array<Maybe<Story>>>;
  getFavsOfUsersLength: Scalars['Int'];
  getIdsOfUsersFavs?: Maybe<Array<Scalars['String']>>;
  story?: Maybe<Story>;
};


export type QueryAuthorArgs = {
  authorId: Scalars['String'];
};


export type QueryCommentsArgs = {
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
  storyId: Scalars['ID'];
};


export type QueryFeedArgs = {
  feedType: Scalars['String'];
  limit: Scalars['Int'];
  offset: Scalars['Int'];
};


export type QueryFeedLengthArgs = {
  feedType: Scalars['String'];
};


export type QueryGetFavsOfUsersArgs = {
  limit: Scalars['Int'];
  offset: Scalars['Int'];
  userEmail: Scalars['String'];
};


export type QueryGetFavsOfUsersLengthArgs = {
  userEmail: Scalars['String'];
};


export type QueryGetIdsOfUsersFavsArgs = {
  userEmail: Scalars['String'];
};


export type QueryStoryArgs = {
  id: Scalars['ID'];
};

export type Story = {
  __typename?: 'Story';
  by?: Maybe<Scalars['String']>;
  descendants?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  isMoreInTheFeed?: Maybe<Scalars['Boolean']>;
  isUsersFav?: Maybe<Scalars['Boolean']>;
  kids?: Maybe<Array<Comment>>;
  score?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  title?: Maybe<Scalars['String']>;
  type: Scalars['String'];
  url?: Maybe<Scalars['String']>;
};

export type User = {
  __typename?: 'User';
  about?: Maybe<Scalars['String']>;
  created?: Maybe<Scalars['Int']>;
  delay?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  karma?: Maybe<Scalars['Int']>;
  submitted?: Maybe<Array<Scalars['Int']>>;
};

export type GetFeedByTypeQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  feedType: Scalars['String'];
}>;


export type GetFeedByTypeQuery = { __typename?: 'Query', feed: Array<{ __typename?: 'Story', id: string, by?: string | null, descendants?: number | null, score?: number | null, time?: number | null, title?: string | null, url?: string | null }> };

export type GetFavsOfUsersQueryVariables = Exact<{
  offset: Scalars['Int'];
  limit: Scalars['Int'];
  userEmail: Scalars['String'];
}>;


export type GetFavsOfUsersQuery = { __typename?: 'Query', getFavsOfUsers?: Array<{ __typename?: 'Story', id: string, by?: string | null, descendants?: number | null, score?: number | null, time?: number | null, title?: string | null, url?: string | null } | null> | null };

export type GetIdsOfUsersFavsQueryVariables = Exact<{
  userEmail: Scalars['String'];
}>;


export type GetIdsOfUsersFavsQuery = { __typename?: 'Query', getIdsOfUsersFavs?: Array<string> | null };

export type GetFeedLengthQueryVariables = Exact<{
  feedType: Scalars['String'];
}>;


export type GetFeedLengthQuery = { __typename?: 'Query', feedLength: number };

export type GetFavsOfUsersLengthQueryVariables = Exact<{
  userEmail: Scalars['String'];
}>;


export type GetFavsOfUsersLengthQuery = { __typename?: 'Query', getFavsOfUsersLength: number };

export type AuthorQueryVariables = Exact<{
  authorId: Scalars['String'];
}>;


export type AuthorQuery = { __typename?: 'Query', author?: { __typename?: 'User', id: string, about?: string | null, created?: number | null, karma?: number | null, submitted?: Array<number> | null } | null };

export type GetCommentsByStoryIdQueryVariables = Exact<{
  storyId: Scalars['ID'];
  limit?: InputMaybe<Scalars['Int']>;
  offset?: InputMaybe<Scalars['Int']>;
}>;


export type GetCommentsByStoryIdQuery = { __typename?: 'Query', comments?: Array<{ __typename?: 'Comment', id: string, text?: string | null, time: number, by: string, kids?: Array<number> | null }> | null };


export const GetFeedByTypeDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeedByType"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"feedType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feed"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"feedType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"feedType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"}},{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetFeedByTypeQuery, GetFeedByTypeQueryVariables>;
export const GetFavsOfUsersDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getFavsOfUsers"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFavsOfUsers"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"userEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"}},{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetFavsOfUsersQuery, GetFavsOfUsersQueryVariables>;
export const GetIdsOfUsersFavsDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"getIdsOfUsersFavs"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getIdsOfUsersFavs"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}}}]}]}}]} as unknown as DocumentNode<GetIdsOfUsersFavsQuery, GetIdsOfUsersFavsQueryVariables>;
export const GetFeedLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFeedLength"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"feedType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"feedLength"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"feedType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"feedType"}}}]}]}}]} as unknown as DocumentNode<GetFeedLengthQuery, GetFeedLengthQueryVariables>;
export const GetFavsOfUsersLengthDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetFavsOfUsersLength"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"getFavsOfUsersLength"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"userEmail"},"value":{"kind":"Variable","name":{"kind":"Name","value":"userEmail"}}}]}]}}]} as unknown as DocumentNode<GetFavsOfUsersLengthQuery, GetFavsOfUsersLengthQueryVariables>;
export const AuthorDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"Author"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"author"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"authorId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"authorId"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"about"}},{"kind":"Field","name":{"kind":"Name","value":"created"}},{"kind":"Field","name":{"kind":"Name","value":"karma"}},{"kind":"Field","name":{"kind":"Name","value":"submitted"}}]}}]}}]} as unknown as DocumentNode<AuthorQuery, AuthorQueryVariables>;
export const GetCommentsByStoryIdDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetCommentsByStoryId"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"ID"}}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"limit"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}},{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"offset"}},"type":{"kind":"NamedType","name":{"kind":"Name","value":"Int"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"comments"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"storyId"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storyId"}}},{"kind":"Argument","name":{"kind":"Name","value":"limit"},"value":{"kind":"Variable","name":{"kind":"Name","value":"limit"}}},{"kind":"Argument","name":{"kind":"Name","value":"offset"},"value":{"kind":"Variable","name":{"kind":"Name","value":"offset"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"text"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"by"}},{"kind":"Field","name":{"kind":"Name","value":"kids"}}]}}]}}]} as unknown as DocumentNode<GetCommentsByStoryIdQuery, GetCommentsByStoryIdQueryVariables>;