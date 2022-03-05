import { Schema, Model, model, Document } from 'mongoose';

const noteSchema = new Schema<noteDocument, Model<noteDocument>>({
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

interface noteDocument extends Document {
    noteText: string,
    dateAdded: string,
}

module.exports = model<noteDocument, Model<noteDocument>>('Note',noteSchema);