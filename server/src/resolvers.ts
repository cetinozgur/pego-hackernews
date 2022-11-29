import { Resolvers } from "__generated__/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    stories: async (_, { storyType, offset, limit }, { dataSources }) => {
      const storyIds = await dataSources.hackernewsApi.getStoryIdsByType(storyType);
      const stories = await storyIds
        .slice(offset!, offset! + limit!)
        .map((id: number) => dataSources.hackernewsApi.getItemById(id));
      return stories;
    },
    story: (_, { id }, { dataSources }) => {
      return dataSources.hackernewsApi.getItemById(id);
    },
    comments: async (_, { storyId }, { dataSources }) => {
      const commentIds = await dataSources.hackernewsApi.getItemCommentIds(storyId);
      const comments = await commentIds.map((id: number) =>
        dataSources.hackernewsApi.getItemById(id)
      );
      return comments;
    },
  },
  Mutation: {
    createUser: async (_, { userEmail }, { dataSources }) => {
      const newUser = await dataSources.userApi.user.create({
        data: {
          email: userEmail,
          favs: [],
        },
      });
      return "Success";
    },
  },
  Story: {
    by: ({ by }, _, { dataSources }, __) => {
      return dataSources.hackernewsApi.getUserById(by);
    },
    // Gets the top level comment of story
    kids: async ({ kids: commentIds }, _, { dataSources }, __) => {
      if (commentIds && commentIds.length > 0) {
        return commentIds.map((id) => dataSources.hackernewsApi.getItemById(id));
      } else {
        return [];
      }
    },
  },
  Comment: {
    by: ({ by }, _, { dataSources }, __) => {
      return dataSources.hackernewsApi.getUserById(by);
    },
  },
};
