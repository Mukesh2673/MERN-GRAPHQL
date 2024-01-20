import {
    createPlateForms, getPlateForm
} from '../../db/query/plateForm';
import 'dotenv/config';

interface createPlateForm {
    name: string;
}

export const resolvers = {
    Mutation: {
        createPlateForm: async(_parent: any, args: any) => {
            const publicFile = await createPlateForms(args);
            return publicFile[0];
            
        },
        // updatePublicFiles: async (_parent: any, args: createPublicFileInput) => {
        //     const publicFile = await updatePublicFiles(args);
        //     return publicFile[0];
        // },
        // deletePublicFiles: async (_parent: any, args: any) => {
        //     const publicFile = await deletePublicFiles(args);
        //     return publicFile[0];
        // },
    },

    Query: {
        plateForms: async () => {
            return await getPlateForm();
        },
    },
};


