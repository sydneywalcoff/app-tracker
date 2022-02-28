import { App } from "../models";

interface AppInterface {
    jobTitle: string,
    jobDescription: string, 
    status: string,
    location: string,
    quickApply: boolean,
    jobScore?: number
}

interface SingleAppProps {
    _id: String
}

const resolvers = {
    Query: {
        Apps: async () => {
            const AppsData = await App.find();
            return AppsData;
        },
        App: async (_: undefined, { _id }: SingleAppProps ) => {
            const appData = await App.findById(_id);
            return appData;
        }
    },
    Mutation: {
        addApp: async (_:undefined, args: AppInterface) => {
            const AppData = await App.create(args);
            return AppData;
        }
    }
};

export default resolvers;