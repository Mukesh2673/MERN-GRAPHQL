import {resolver} from "./resolvers"
import { gqlSchema } from "./schema";
import { ApolloServer } from "@apollo/server";
export const gqlServer=new ApolloServer({
  typeDefs:gqlSchema,
  resolvers:resolver
})
