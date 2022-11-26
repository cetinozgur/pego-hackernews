import { Resolvers } from "__generated__/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    stories: async (_, __, { dataSources }) => {
      const storyIds = await dataSources.storyApi.getTopStoryIds();
      return storyIds.slice(0, 20).map((id: number) => dataSources.storyApi.getItemById(id));
    },
    story: (_, { id: storyId }, { dataSources }) => {
      return dataSources.storyApi.getItemById(storyId);
    },
  },
  Story: {
    by: ({ by }, _, { dataSources }, __) => {
      return dataSources.storyApi.getUserByName(by);
    },
    kids: async ({ kids: commentIds }, _, { dataSources }, __) => {
      if (commentIds && commentIds.length > 0) {
        return commentIds.map((id) => dataSources.storyApi.getItemById(id));
      } else {
        return [];
      }
    },
  },
};
