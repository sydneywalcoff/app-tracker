import { Schema, model, Document, Model, SchemaDefinitionProperty } from 'mongoose';
import dateFormat from '../utils/dateFormat'
const noteSchema = require('./Note');
const statusHistorySchema = require('./StatusHistory');
const locationSchema = require('./Location');

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
        require: false
    },
    statusHistory: [statusHistorySchema],
    companyName: {
        type: String,
        require: true
    },
    location:  {
        type: locationSchema || String
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
    link: {
        type: String,
        require: false
    }
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
    statusHistory: [],
    location: {},
    quickApply: boolean,
    jobScore?: number,
    dateApplied: Date | SchemaDefinitionProperty<Date>,
    lastUpdated: Date | SchemaDefinitionProperty<Date>,
    notes: [],
    link: String
}

module.exports =  model<AppDocument, Model<AppDocument>>("App", appSchema);