import { Schema, Document } from 'mongoose';
import dateFormat from '../utils/dateFormat';

const noteSchema = new Schema<NoteDocument>({
    noteText: {
        type: String,
        required: true
    },
    dateAdded: {
        type: Date,
        default: Date.now,
        get: timeStamp => dateFormat(timeStamp)
    }
},
{
    toJSON: {
        getters: true
    }
});

export interface NoteDocument extends Document {
    noteText: string,
    dateAdded: Date,
}

module.exports = noteSchema;