import { AuthenticationError } from 'apollo-server-express';

const { App, User } = require("../models");
import { AppDocument } from '../models';
const { signToken } = require('../utils/auth');

interface IdAppProps {
    _id: String
}

interface AppProps extends AppDocument {
    appId: String
    workStyle: String
    officeLocation: String
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

interface ChangePasswordProps {
    newPassword: String,
    oldPassword: String
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
        },
        myApps: async (_: undefined, args, { user }) => {
            if (user) {
                const userData = await User.findOne({ _id: user._id }).select('-__v -password').populate('apps');
                return userData.apps;
            }
            throw new AuthenticationError('You are not logged in');
        }
    },
    Mutation: {
        addApp: async (_: undefined, args: AppProps, context) => {
            if (context.user) {
                const lastUpdated = Date.now();
                const { status, workStyle, officeLocation } = args;
                const statusChange = {
                    dateChanged: lastUpdated,
                    status
                };
                const statusHistory = [statusChange];
                
                const appData = await App.create({
                    ...args,
                    locationObj: {
                        workStyle,
                        officeLocation
                    }, 
                    lastUpdated, 
                    statusHistory 
                });
                await User.findByIdAndUpdate(
                    context.user._id,
                    { $push: { apps: appData._id } },
                    { new: true }
                );
                return appData;
            }
            throw new AuthenticationError('You are not logged in');
        },
        editApp: async (_: undefined, args: AppProps, context) => {
            if (context.user) {
                const { _id, status, officeLocation, workStyle } = args;
                const lastUpdated = Date.now();
                let statusChange = {
                    status: status,
                    dateChanged: lastUpdated
                };
                let appData = !status ?
                    await App.findByIdAndUpdate(_id, { ...args, locationObj: { officeLocation, workStyle }, lastUpdated }, { new: true }) :
                    await App.findByIdAndUpdate(_id, { ...args, $addToSet: { statusHistory: statusChange }, locationObj: { officeLocation, workStyle } }, { new: true })
                return appData;
            }
            throw new AuthenticationError('You are not logged in');
        },
        editAppStatus: async (_: undefined, args: AppProps, context) => {
            if (context.user) {
                const { _id, status } = args;
                const lastUpdated = Date.now();
                let statusChange = {
                    status: status,
                    dateChanged: lastUpdated
                };
                const appData = await App.findByIdAndUpdate(_id, { $addToSet: { statusHistory: statusChange }, status, lastUpdated }, { new: true });
                return appData;
            }
            throw new AuthenticationError('You are not logged in');
        },
        deleteApp: async (_: undefined, { _id }: IdAppProps, context) => {
            if (context.user) {
                const deletedAppData = await App.findOneAndDelete({ _id });
                return deletedAppData;
            }
            throw new AuthenticationError('You are not logged in');
        },
        addNote: async (_: undefined, args: AppProps, context) => {
            if (context.user) {
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
            if (context.user) {
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
        addUser: async (_: undefined, args: AddUserProps) => {
            const userData = await User.create(args);
            const token = signToken(userData);
            return { userData, token };
        },
        login: async (_: undefined, args: AddUserProps) => {
            const { username, password } = args;
            const user = await User.findOne({ username });

            if (!user) {
                throw new AuthenticationError('Wrong credentials')
            }
            const isCorrectPassword = await user.isCorrectPassword(password);
            if (!isCorrectPassword) {
                throw new AuthenticationError('Wrong credentials')
            }
            const token = signToken(user);

            return { user, token };
        },
        resetPassword: async (_: undefined, args: ChangePasswordProps, context) => {
            if (context.user) {
                const { newPassword, oldPassword } = args
                const currUser = await User.findById(context.user._id);
                const isOldPasswordCorrect = await currUser.isCorrectPassword(oldPassword)
                if (!isOldPasswordCorrect) throw new AuthenticationError('Wrong password');
                const hashedPassword = await  currUser.hashNewPassword(newPassword);
                const updatedUserData = await User.findByIdAndUpdate(
                    { _id: context.user._id },
                    { password: hashedPassword },
                    { new: true }
                );
                return updatedUserData;
            }
            throw new AuthenticationError('You are not logged in');
        },
    }
};

export default resolvers;