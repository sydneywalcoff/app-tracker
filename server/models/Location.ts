import { Schema, Document } from 'mongoose';

const locationSchema = new Schema<LocationDocument>({
    officeLocation: {
        type: String
    },
    workStyle: {
        type: String,
        default: 'hybrid'
    }
},
    {
        toJSON: {
            getters: true
        }
    });

export interface LocationDocument extends Document {
    officeLocation: string,
    workStyle: string
}

module.exports = locationSchema;