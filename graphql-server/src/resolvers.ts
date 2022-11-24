import type { Context } from "./context";

export const resolvers = {
  Query: {
    stories: async (_: any, __: any, { dataSources }: Context) => {
      const storyIds = await dataSources.storyApi.getTopStoryIds();
      return storyIds.map((id: number) => dataSources.storyApi.getItemById(id));
    },
    story: (_: any, { id }: any, { dataSources }: Context, info: any) => {
      return dataSources.storyApi.getItemById(id);
    },
  },
  Story: {
    by: ({ by }: { by: string }, _: any, { dataSources }: Context, __: any) => {
      return dataSources.storyApi.getAuthorByName(by);
    },
  },
};
