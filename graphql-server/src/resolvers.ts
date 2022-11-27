import { Resolvers } from "__generated__/resolvers-types";

export const resolvers: Resolvers = {
  Query: {
    stories: async (_, __, { dataSources }) => {
      const storyIds = await dataSources.storyApi.getTopStoryIds();
      const stories = await storyIds
        .slice(0, 20)
        .map((id: number) => dataSources.storyApi.getItemById(id));

      return stories;
    },
    story: (_, { id }, { dataSources }) => {
      console.log(id);
      return dataSources.storyApi.getItemById(id);
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
};
