import fs from 'fs'
import path from "path";
import { gql } from "graphql-tag";
const typeDefs = `
type Query {
  _empty: String
}
type Mutation {
  _empty: String
}`;

const platformsDefs = gql(fs.readFileSync(path.join(__dirname,"./plateForms.graphql"),'utf-8'));
const publicFileDefs=gql(fs.readFileSync(path.join(__dirname,"./publicFiles.graphql"),'utf-8'));
const users=gql(fs.readFileSync(path.join(__dirname,"./user.graphql"),'utf-8'));
const login=gql(fs.readFileSync(path.join(__dirname,"./login.graphql"),'utf-8'));
export const gqlSchema:any=[typeDefs,platformsDefs,publicFileDefs,users,login]