export const resolvers = {
  Query: {
    stories: async (_: any, __: any, context: any) => {
      const storyIds = await context.dataSources.storyApi.getTopStoryIds();
      return storyIds.map((id: number) => context.dataSources.storyApi.getItemById(id));
    },
    story: (_: any, { id }: any, { dataSources }: any, info: any) => {
      return dataSources.storyApi.getItemById(id);
    },
  },
  Story: {
    by: (parent: any, args: any, context: any, info: any) => {
      const userId = parent.by;
      const api = context.dataSources.storyApi;
      return api.getAuthorByName(userId);
    },
  },
};
