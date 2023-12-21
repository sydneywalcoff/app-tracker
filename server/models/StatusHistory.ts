import { Schema, Document } from 'mongoose';
import dateFormat from '../utils/dateFormat';

const statusHistorySchema = new Schema<StatusHistoryDocument>({
    dateChanged: {
        type: Date,
        default: Date.now,
        get: timeStamp => dateFormat(timeStamp)
    },
    status: {
        type: String,
        required: true
    }
},
{
    toJSON: {
        getters: true
    }
});

export interface StatusHistoryDocument extends Document {
    dateChanged: Date,
    status: string,
}

module.exports = statusHistorySchema;