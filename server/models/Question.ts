import { Schema, Document } from 'mongoose';

const questionSchema = new Schema<QuestionDocument>({
    questionText: {
        type: String,
        required: true
    },
    answerText: {
        type: String,
    }
},
{
    toJSON: {
        getters: true
    }
});


interface QuestionDocument extends Document {
    questionText: string,
    answerText: string
}

module.exports = questionSchema;