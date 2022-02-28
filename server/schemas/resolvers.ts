import { App } from "../models";

interface AppInterface {
    jobTitle: string,
    jobDescription: string, 
    status: string,
    location: string,
    quickApply: boolean,
    jobScore?: number
}

const resolvers = {
    Query: {
        Apps: async () => {
            const AppsData = await App.find();
            return AppsData;
        },
    },
    Mutation: {
        addApp: async (_:undefined, args: AppInterface) => {
            const AppData = await App.create(args);
            return AppData;
        }
    }
};

export default resolvers;