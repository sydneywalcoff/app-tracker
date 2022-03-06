import { Schema, Document } from 'mongoose';

const noteSchema = new Schema<NoteDocument>({
    noteText: {
        type: String,
        required: true
    },
    dateAdded: {
        type: String,
        required: true
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