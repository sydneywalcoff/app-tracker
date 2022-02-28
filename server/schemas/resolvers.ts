import { App } from "../models";

const resolvers = {
    Query: {
        Apps: async () => {
            const AppsData = await App.find();
            return AppsData;
        },
    }
};

export default resolvers;