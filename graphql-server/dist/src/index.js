"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const story_api_1 = require("./datasources/story-api");
const apollo_server_1 = require("apollo-server");
const resolvers_1 = require("./resolvers");
const fs_1 = require("fs");
// Read .graphql extension
const typeDefs = (0, fs_1.readFileSync)("./src/schema.graphql", { encoding: "utf-8" });
const server = new apollo_server_1.ApolloServer({
    typeDefs,
    resolvers: resolvers_1.resolvers,
    csrfPrevention: true,
    cache: "bounded",
    // context: {
    //   dataSources: () => {
    //     return {
    //       storyApi: new StoryAPI(),
    //     };
    //   },
    // },
    dataSources: () => {
        return {
            storyApi: new story_api_1.StoryAPI(),
        };
    },
});
const port = 4000;
server.listen({ port }).then(({ url }) => {
    console.log(`🚀  Server ready at ${url}`);
});
//# sourceMappingURL=index.js.map