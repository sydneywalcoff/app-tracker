import { Schema, model, Document, Model } from 'mongoose';
import { AppDocument } from './App';
const App: AppDocument = require('./App');

const userSchema = new Schema<UserDocument, Model<UserDocument>>({
    username: {
        type: String,
        require: true,
        trim: true,
        unique: true
    },
    password: {
        type: String,
        require: true,
        minlength: 3
    },
    email: {
        type: String,
        require: true,
        unique: true,
        match: /.+\@.+\..+/
    },
    apps: []
},
{
    toJSON: {
        getters: true
    }
});

export interface UserDocument extends Document {
    username: String,
    password: String,
    email: String,
    apps: [AppDocument]
}

module.exports =  model<UserDocument, Model<UserDocument>>("User", userSchema);