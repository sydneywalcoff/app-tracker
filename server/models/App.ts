import { Schema, model } from 'mongoose';
import formatDate  from '../utils/dateFormat'

interface AppInterface {
    jobTitle: string,
    jobDescription: string,
    companyName: string,
    status: string,
    location: string,
    quickApply: boolean,
    jobScore?: number,
    dateApplied: string
}

const appSchema = new Schema({
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
    }
},
{
    toJSON: {
        getters: true
    }
});

const App = model("App", appSchema);

module.exports = App;