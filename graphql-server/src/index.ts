import { StoryAPI } from "./datasources/story-api";
import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { readFileSync } from "fs";

// Read .graphql extension
const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

// Context safety, required for type generator to pass for resolvers
export interface MyContext {
  dataSources: {
    storyApi: StoryAPI;
  };
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
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
      storyApi: new StoryAPI(),
    };
  },
});

const port = 4000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
