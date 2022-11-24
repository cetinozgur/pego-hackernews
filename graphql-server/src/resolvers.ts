import { Resolvers } from "__generated__/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    stories: async (_, __, { dataSources }) => {
      const storyIds = await dataSources.storyApi.getTopStoryIds();
      return storyIds.map((id: number) => dataSources.storyApi.getItemById(id));
    },
    story: (_, { id }, { dataSources }) => {
      return dataSources.storyApi.getItemById(id);
    },
  },
  Story: {
    by: ({ by }, _, { dataSources }, __) => {
      return dataSources.storyApi.getUserByName(moveBy);
    },
  },
};
