import { ApolloServer } from "apollo-server";
import { PORT as port } from "./config";

// 1
import { schema } from "./schema";
export const server = new ApolloServer({
  schema,
});

// 2
server.listen({ port }).then(({ url }) => {
  console.log(`🚀  GraphQL server ready at ${url}`);
});
