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
            const userData = await User.find().select('-__v -password').populate('apps');
            return userData;
        }
    },
    Mutation: {
        addApp: async (_: undefined, args: AppDocument, context) => {
            if(context.user) {
                const lastUpdated = Date.now();
                const appData = await App.create({ ...args, lastUpdated });
                await User.findByIdAndUpdate(
                    context.user._id,
                    { $push: { apps: appData._id} },
                    { new: true }
                );
                return appData;
            }
            throw new AuthenticationError('You are not logged in');
        },
        editApp: async (_: undefined, args: AppDocument, context) => {
            if(context.user) {
                const { _id } = args;
                const lastUpdated = Date.now();
                const appData = await App.findByIdAndUpdate(_id, { ...args, lastUpdated}, { new: true });
                return appData;
            }
            throw new AuthenticationError('You are not logged in');
        },
        deleteApp: async (_: undefined, { _id }: IdAppProps, context) => {
            if(context.user) {
                const deletedAppData = await App.findOneAndDelete({ _id });
                return deletedAppData;
            }
            throw new AuthenticationError('You are not logged in');
        },
        addNote: async (_: undefined, args: AppIdProps, context) => {
            if(context.user) {
                const { appId } = args;
                const lastUpdated = Date.now();
                const updatedAppData = await App.findByIdAndUpdate(
                    { _id: appId },
                    { $addToSet: { notes: args }, lastUpdated },
                    { new: true }
                );
                return updatedAppData
            }
            throw new AuthenticationError('You are not logged in');
        },
        deleteNote: async (_: undefined, args: NoteIdProps, context) => {
            if(context.user) {
                const { appId, noteId } = args;
                const lastUpdated = Date.now();
                const updatedAppData = await App.findByIdAndUpdate(
                    { _id: appId },
                    { $pull: { notes: { _id: noteId } }, lastUpdated },
                    { new: true }
                );
                return updatedAppData;
            }
            throw new AuthenticationError('You are not logged in');
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