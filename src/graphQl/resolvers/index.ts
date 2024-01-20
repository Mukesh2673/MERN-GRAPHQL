import {merge} from "lodash"
import { resolvers as publicFileResolvers} from "./publicFiles";
import { resolvers as plateFormResolvers} from "./plateForms";
import {resolvers as userResolvers} from "./user"
import {resolvers as loginResolvers} from "./login"
const resolvers = {
    Query: { 
      
    },
    Mutation:{
     
    },
};

export const resolver=merge(resolvers,publicFileResolvers,plateFormResolvers,userResolvers,loginResolvers)