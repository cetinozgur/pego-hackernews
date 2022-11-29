import { HackernewsAPI } from "./datasources/hackernews-api";
import { ApolloServer } from "apollo-server";
import { resolvers } from "./resolvers";
import { readFileSync } from "fs";
import { PrismaClient } from "@prisma/client";
import { context } from "./context";

// Read .graphql extension
const typeDefs = readFileSync("./src/schema.graphql", { encoding: "utf-8" });

// Required for the type generator
export interface MyContext {
  dataSources: {
    hackernewsApi: HackernewsAPI;
    userApi: PrismaClient;
  };
}

const server = new ApolloServer({
  typeDefs,
  resolvers,
  csrfPrevention: true,
  cache: "bounded",
  context: context,
  //@ts-ignore
  dataSources: () => {
    return {
      hackernewsApi: new HackernewsAPI(),
      userApi: new PrismaClient(),
    };
  },
});

const port = 4000;

server.listen({ port }).then(({ url }) => {
  console.log(`🚀  Server ready at ${url}`);
});

// const { MongoClient, ServerApiVersion } = require('mongodb');
// const uri = "mongodb+srv://inkyforuse:<password>@cluster0.7sftobi.mongodb.net/?retryWrites=true&w=majority";
// const client = new MongoClient(uri, { useNewUrlParser: true, useUnifiedTopology: true, serverApi: ServerApiVersion.v1 });
// client.connect(err => {
//   const collection = client.db("test").collection("devices");
//   // perform actions on the collection object
//   client.close();
// });
