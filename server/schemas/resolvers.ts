const App = require("../models");
import { AppDocument } from '../models'

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

interface QuestionProps {
    appId: String,
    questionText: String,
    answerText: String
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
        }
    },
    Mutation: {
        addApp: async (_: undefined, args: AppDocument) => {
            const lastUpdated = Date.now();
            const initQuestions = ['What is the salary range for this position?', 'What is the rest of the hiring process?'];
            const [firstQ, secQ] = initQuestions;
            const appData = await App.create({ ...args, lastUpdated, questions: [{ questionText: firstQ }, { questionText: secQ }] });
            return appData;
        },
        editApp: async (_: undefined, args: AppDocument) => {
            const { _id } = args;
            const lastUpdated = Date.now();
            const appData = await App.findByIdAndUpdate(_id, { ...args, lastUpdated }, { new: true });
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
        addQuestion: async (_: undefined, args: QuestionProps) => {
            const { appId, questionText } = args;
            const lastUpdated = Date.now();
            const updatedAppData = await App.findByIdAndUpdate(
                { _id: appId },
                { $addToSet: { questions: { questionText } }, lastUpdated },
                { new: true }
            );
            return updatedAppData;
        }
    }
};

export default resolvers;