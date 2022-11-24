import { ApolloServer } from "apollo-server";
import { PORT as port } from "./config";

// 1
import { schema } from "./schema";
export const server = new ApolloServer({
  schema,
});

console.log(port);

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  GraphQL server ready at ${url}`);
});
