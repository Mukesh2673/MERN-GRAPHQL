import {
    createPublicFiles,
    deletePublicFiles,
    getPublicFiles,
    updatePublicFiles,
} from '../../db/query/publicFiles';
import 'dotenv/config';

interface createPublicFileInput {
    fileName: string;
    url: string;
    uploadDate: any;
    lastUsed: any;
}

export const resolvers = {
    Mutation: {
        createPublicFiles: async(_parent: any, args: createPublicFileInput) => {
            const publicFile = await createPublicFiles(args);
            return publicFile?.length>0?publicFile[0]:publicFile;
            
        },
        updatePublicFiles: async (_parent: any, args: createPublicFileInput) => {
            const publicFile = await updatePublicFiles(args);
            return publicFile?.length>0?publicFile[0]:publicFile;
        },
        deletePublicFiles: async (_parent: any, args: any) => {
            const publicFile = await deletePublicFiles(args);

            return publicFile?.length>0?publicFile[0]:publicFile;
        },
    },

    Query: {
        publicFiles: async () => {
            return await getPublicFiles();
        },
    },
};
