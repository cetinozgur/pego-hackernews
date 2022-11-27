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
  by?: Maybe<Scalars['String']>;
  id: Scalars['ID'];
  kids?: Maybe<Array<Scalars['Int']>>;
  parent?: Maybe<Scalars['Int']>;
  text?: Maybe<Scalars['String']>;
  time?: Maybe<Scalars['Int']>;
  type?: Maybe<Scalars['String']>;
};

export type Query = {
  __typename?: 'Query';
  stories: Array<Story>;
  story?: Maybe<Story>;
};


export type QueryStoriesArgs = {
  storyType: Scalars['String'];
};


export type QueryStoryArgs = {
  id: Scalars['ID'];
};

export type Story = {
  __typename?: 'Story';
  by: User;
  descendants?: Maybe<Scalars['Int']>;
  id: Scalars['ID'];
  kids?: Maybe<Array<Comment>>;
  score?: Maybe<Scalars['Int']>;
  time?: Maybe<Scalars['Int']>;
  title: Scalars['String'];
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

export type GetStoriesQueryVariables = Exact<{
  storyType: Scalars['String'];
}>;


export type GetStoriesQuery = { __typename?: 'Query', stories: Array<{ __typename?: 'Story', id: string, descendants?: number | null, score?: number | null, time?: number | null, title: string, url?: string | null, by: { __typename?: 'User', id: string, karma?: number | null } }> };


export const GetStoriesDocument = {"kind":"Document","definitions":[{"kind":"OperationDefinition","operation":"query","name":{"kind":"Name","value":"GetStories"},"variableDefinitions":[{"kind":"VariableDefinition","variable":{"kind":"Variable","name":{"kind":"Name","value":"storyType"}},"type":{"kind":"NonNullType","type":{"kind":"NamedType","name":{"kind":"Name","value":"String"}}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"stories"},"arguments":[{"kind":"Argument","name":{"kind":"Name","value":"storyType"},"value":{"kind":"Variable","name":{"kind":"Name","value":"storyType"}}}],"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"by"},"selectionSet":{"kind":"SelectionSet","selections":[{"kind":"Field","name":{"kind":"Name","value":"id"}},{"kind":"Field","name":{"kind":"Name","value":"karma"}}]}},{"kind":"Field","name":{"kind":"Name","value":"descendants"}},{"kind":"Field","name":{"kind":"Name","value":"score"}},{"kind":"Field","name":{"kind":"Name","value":"time"}},{"kind":"Field","name":{"kind":"Name","value":"title"}},{"kind":"Field","name":{"kind":"Name","value":"url"}}]}}]}}]} as unknown as DocumentNode<GetStoriesQuery, GetStoriesQueryVariables>;