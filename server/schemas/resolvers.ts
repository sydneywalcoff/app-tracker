import { App } from "../models";

interface AppInterface {
    _id: any,
    jobTitle: string,
    jobDescription: string, 
    status: string,
    location: string,
    quickApply: boolean,
    jobScore?: number
}

interface IdAppProps {
    _id: String
}

const resolvers = {
    Query: {
        Apps: async () => {
            const appsData = await App.find();
            return appsData;
        },
        App: async (_: undefined, { _id }: IdAppProps ) => {
            const appData = await App.findById(_id);
            return appData;
        }
    },
    Mutation: {
        addApp: async (_:undefined, args: AppInterface) => {
            const appData = await App.create(args);
            return appData;
        },
        editApp: async (_: undefined, args: AppInterface) => {
            const { _id } = args;
            const appData = await App.findByIdAndUpdate(_id,args);
            return appData;
        },
        deleteApp: async (_: undefined, { _id }: IdAppProps) => {
            const deletedAppData = await App.findOneAndDelete(_id);
            return deletedAppData;
        }
    }
};

export default resolvers;