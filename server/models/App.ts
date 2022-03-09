import { Schema, model, Document, Model } from 'mongoose';
import formatDate  from '../utils/dateFormat'
const noteSchema = require('./Note');

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
        type: String,
        default: formatDate()
    },
    lastUpdated: {
        type: String,
        get: date => formatDate()
    },
    notes: [noteSchema]
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
    dateApplied: string,
    lastUpdated: string,
    notes: []
}

module.exports =  model<AppDocument, Model<AppDocument>>("App", appSchema);