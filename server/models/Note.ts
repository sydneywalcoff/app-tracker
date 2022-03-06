import { Schema, Document } from 'mongoose';
import formatDate from '../utils/dateFormat';

const noteSchema = new Schema<NoteDocument>({
    noteText: {
        type: String,
        required: true
    },
    dateAdded: {
        type: String,
        default: formatDate()
    }
},
{
    toJSON: {
        getters: true
    }
});

export interface NoteDocument extends Document {
    noteText: string,
    dateAdded: string,
}

module.exports = noteSchema;