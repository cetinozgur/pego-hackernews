"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.resolvers = void 0;
exports.resolvers = {
    Query: {
        stories: async (_, __, { dataSources }) => {
            const storyIds = await dataSources.storyApi.getTopStoryIds();
            return storyIds.map((id) => dataSources.storyApi.getItemById(id));
        },
        story: (_, { id }, { dataSources }, info) => {
            return dataSources.storyApi.getItemById(id);
        },
    },
    Story: {
        by: ({ by }, _, { dataSources }, __) => {
            return dataSources.storyApi.getAuthorByName(by);
        },
    },
};
//# sourceMappingURL=resolvers.js.map