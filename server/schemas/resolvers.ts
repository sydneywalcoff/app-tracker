const App  = require("../models");
import { AppDocument } from '../models'

interface IdAppProps {
    _id: String
}

const resolvers = {
    Query: {
        apps: async () => {
            const appsData = await App.find().sort({ dateApplied: -1, location: 'asc'});
            return appsData;
        },
        app: async (_: undefined, { _id }: IdAppProps ) => {
            const appData = await App.findById(_id);
            return appData;
        }
    },
    Mutation: {
        addApp: async (_:undefined, args: AppDocument) => {
            const appData = await App.create(args);
            return appData;
        },
        editApp: async (_: undefined, args: AppDocument) => {
            const { _id } = args;
            const appData = await App.findByIdAndUpdate(_id,args);
            return appData;
        },
        deleteApp: async (_: undefined, { _id }: IdAppProps) => {
            const deletedAppData = await App.findOneAndDelete({ _id });
            return deletedAppData;
        }
    }
};

export default resolvers;