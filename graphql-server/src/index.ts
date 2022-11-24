import { StoryAPI } from "./datasources/story-api";
import { storyApi } from "./context";
import { ApolloServer } from "apollo-server";
import { PORT as port } from "./config";
import { typeDefs } from "./schema";
import { resolvers } from "./resolvers";

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

// The `listen` method launches a web server.
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});
