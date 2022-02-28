const{ App } = require('../models');

const resolvers = {
    Query: {
        Apps: async () => {
            const Apps = await App.find();
            return Apps;
        }
    }
};

export default resolvers;