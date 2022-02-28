import { Schema, model } from 'mongoose';

interface AppInterface {
    jobTitle: string,
    jobDescription: string, 
    status: string,
    location: string,
    quickApply: boolean,
    jobScore?: number
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
    location:  {
        type: String,
        require: true
    },
    quickApply:  {
        type: Boolean,
        require: true
    },
    jobScore:  {
        type: Number,
        require: false
    },
},
{
    toJSON: {
        getters: true
    }
});

const App = model("App", appSchema);

export = App;