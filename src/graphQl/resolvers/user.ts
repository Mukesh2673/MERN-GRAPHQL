import { registerUser,userData } from '.././../db/query/user';
import 'dotenv/config';


export const resolvers = {
    Mutation: {
        register: async(_parent: any, args: any) => {
            try{
                const user = await registerUser(args);
                return user?.length>0?user[0]:user;
           
            }
            catch(err)
            {
                throw new Error(err);
            }
            
        }
    },

    Query: {
        users: async () => {
            return await userData();
        },
    },
};


