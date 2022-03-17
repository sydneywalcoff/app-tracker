import { Schema, model, Document, Model } from 'mongoose';
import dateFormat from '../utils/dateFormat'
const noteSchema = require('./Note');
const questionSchema = require('./Question');

const appSchema = new Schema<AppDocument, Model<AppDocument>>({
    jobTitle: {
        type: String,
        require: true
    },
    jobDescription:  {
        type: String,
        require: true
    }, 
    status:  {
        type: String,
        require: true
    },
    companyName: {
        type: String,
        require: true
    },
    location:  {
        type: String,
        require: true
    },
    quickApply:  {
        type: Boolean,
        require: true,
        default: false
    },
    jobScore:  {
        type: Number,
        require: false
    },
    dateApplied: {
        type: Date,
        default: Date.now,
        get: timeStamp => dateFormat(timeStamp),
    },
    lastUpdated: {
        type: Date,
        get: timeStamp => {
            if(!timeStamp) {
                return ''
            }
            return dateFormat(timeStamp)
        },
    },
    notes: [noteSchema],
    questions: [questionSchema]
},
{
    toJSON: {
        getters: true
    }
});

export interface AppDocument extends Document {
    jobTitle: string,
    jobDescription: string,
    companyName: string,
    status: string,
    location: string,
    quickApply: boolean,
    jobScore?: number,
    dateApplied: Date,
    lastUpdated: Date,
    notes: [],
    questions: []
}

module.exports =  model<AppDocument, Model<AppDocument>>("App", appSchema);