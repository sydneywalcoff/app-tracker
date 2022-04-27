import { AuthenticationError } from 'apollo-server-express';

const { App, User } = require("../models");
import { AppDocument } from '../models';
const { signToken } = require('../utils/auth');

interface IdAppProps {
    _id: String
}

interface AppIdProps extends AppDocument {
    appId: String
}

interface NoteIdProps {
    noteId: String,
    appId: String
}

interface AddUserProps {
    username: String,
    password: String,
    email: String
}

const resolvers = {
    Query: {
        apps: async () => {
            const appsData = await App.find().sort({ dateApplied: -1, location: 'asc' });
            return appsData;
        },
        app: async (_: undefined, { _id }: IdAppProps) => {
            const appData = await App.findById(_id);
            return appData;
        },
        users: async () => {
            const userData = await User.find().select('-__v');
            return userData;
        }
    },
    Mutation: {
        addApp: async (_: undefined, args: AppDocument) => {
            const lastUpdated = Date.now();
            const appData = await App.create({...args, lastUpdated});
            return appData;
        },
        editApp: async (_: undefined, args: AppDocument) => {
            const { _id } = args;
            const lastUpdated = Date.now();
            const appData = await App.findByIdAndUpdate(_id, { ...args, lastUpdated}, { new: true });
            return appData;
        },
        deleteApp: async (_: undefined, { _id }: IdAppProps) => {
            const deletedAppData = await App.findOneAndDelete({ _id });
            return deletedAppData;
        },
        addNote: async (_: undefined, args: AppIdProps) => {
            const { appId } = args;
            const lastUpdated = Date.now();
            const updatedAppData = await App.findByIdAndUpdate(
                { _id: appId },
                { $addToSet: { notes: args }, lastUpdated },
                { new: true }
            );
            return updatedAppData
        },
        deleteNote: async (_: undefined, args: NoteIdProps) => {
            const { appId, noteId } = args;
            const lastUpdated = Date.now();
            const updatedAppData = await App.findByIdAndUpdate(
                { _id: appId },
                { $pull: { notes: { _id: noteId } }, lastUpdated },
                { new: true }
            );
            return updatedAppData;
        },
        addUser: async (_:undefined, args: AddUserProps) => {
            const userData = await User.create(args);
            const token = signToken(userData);
            return { userData, token };
        },
        login: async (_:undefined, args:AddUserProps) => {
            const { username, password } = args;
            const user = await User.findOne({ username });

            if(!user) {
                throw new AuthenticationError('Wrong credentials')
            }
            const isCorrectPassword = await user.isCorrectPassword(password);
            if(!isCorrectPassword) {
                throw new AuthenticationError('Wrong credentials')
            }
            const token = signToken(user);

            return { user, token };
        }
    }
};

export default resolvers;