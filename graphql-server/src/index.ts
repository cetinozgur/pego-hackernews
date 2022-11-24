import { storyApi } from "./context";
import { StoryAPI } from "./datasources/story-api";
import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { readFileSync } from "fs";

// Read .graphql extension
const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

// Context safety, required for generating the resolver types
export interface MyContext {
  dataSources: {
    storyApi: StoryAPI;
  };
}

// export type MyContext = any;

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
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
