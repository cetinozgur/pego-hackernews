import { Resolvers } from "__generated__/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    stories: async (_, { storyType, offset, limit }, { dataSources }) => {
      const storyIds = await dataSources.storyApi.getStoryIds(storyType);
      const stories = await storyIds
        .slice(offset!, offset! + limit!)
        .map((id: number) => dataSources.storyApi.getItemById(id));
      return stories;
    },
    story: (_, { id }, { dataSources }) => {
      return dataSources.storyApi.getItemById(id);
    },
    comments: async (_, { storyId }, { dataSources }) => {
      const commentIds = await dataSources.storyApi.getItemCommentIds(storyId);
      const comments = await commentIds.map((id: number) => dataSources.storyApi.getItemById(id));
      return comments;
    },
  },
  Story: {
    by: ({ by }, _, { dataSources }, __) => {
      return dataSources.storyApi.getUserByName(by);
    },
    // Gets the top level comment of story
    kids: async ({ kids: commentIds }, _, { dataSources }, __) => {
      if (commentIds && commentIds.length > 0) {
        return commentIds.map((id) => dataSources.storyApi.getItemById(id));
      } else {
        return [];
      }
    },
  },
  Comment: {
    by: ({ by }, _, { dataSources }, __) => {
      return dataSources.storyApi.getUserByName(by);
    },
  },
};
