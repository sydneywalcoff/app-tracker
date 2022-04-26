import { Schema, model, Document, Model } from 'mongoose';
import { AppDocument } from './App';
const bcrypt = require('bcrypt');
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

userSchema.pre('save', async function (next) {
    if (this.isNew || this.isModified('password')) {
        const saltRounds = 10;
        this.password = await bcrypt.hash(this.password, saltRounds);
    }

    next();
});

// compare the incoming password with the hashed password
userSchema.methods.isCorrectPassword = async function (password) {
    return bcrypt.compare(password, this.password);
};


export interface UserDocument extends Document {
    username: String,
    password: String,
    email: String,
    apps: [AppDocument]
}

module.exports =  model<UserDocument, Model<UserDocument>>("User", userSchema);