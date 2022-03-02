var __awaiter = (this && this.__awaiter) || function (thisArg, _arguments, P, generator) {
    function adopt(value) { return value instanceof P ? value : new P(function (resolve) { resolve(value); }); }
    return new (P || (P = Promise))(function (resolve, reject) {
        function fulfilled(value) { try { step(generator.next(value)); } catch (e) { reject(e); } }
        function rejected(value) { try { step(generator["throw"](value)); } catch (e) { reject(e); } }
        function step(result) { result.done ? resolve(result.value) : adopt(result.value).then(fulfilled, rejected); }
        step((generator = generator.apply(thisArg, _arguments || [])).next());
    });
};
const { App } = require("../models");
const resolvers = {
    Query: {
        apps: () => __awaiter(void 0, void 0, void 0, function* () {
            const appsData = yield App.find();
            return appsData;
        }),
        app: (_, { _id }) => __awaiter(void 0, void 0, void 0, function* () {
            const appData = yield App.findById(_id);
            return appData;
        })
    },
    Mutation: {
        addApp: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const appData = yield App.create(args);
            return appData;
        }),
        editApp: (_, args) => __awaiter(void 0, void 0, void 0, function* () {
            const { _id } = args;
            const appData = yield App.findByIdAndUpdate(_id, args);
            return appData;
        }),
        deleteApp: (_, { _id }) => __awaiter(void 0, void 0, void 0, function* () {
            const deletedAppData = yield App.findOneAndDelete({ _id });
            return deletedAppData;
        })
    }
};
export default resolvers;
