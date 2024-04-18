import { ChangeEvent, useState } from 'react';

import TextArea from '../TextArea';
import Button from '../Button';
import Question from '../Question';

import './assets/style.css'

interface IQuestionParams {
    questions: IQuestion[];
}

interface IQuestion {
    questionText: string;
    _id: String;
    lastUpdated: String;
    roleTag: String;
}

const QuestionList = ({ questions: questionList }: IQuestionParams) => {
    // const [newQuestionText, setNewQuestionText] = useState('');

    
    const handleNewQuestionClick = () => {
        // console.log(newQuestionText)
    };

    const handleNewQuestionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // setNewQuestionText(e.target.value);
    };

    return (
        <div className='questions flex flex-col'>
            <h3 className="text-2xl mb-2">Questions</h3>
            <ul className="px-5 flex flex-col">
                {questionList && questionList.map(question => <Question question={question} />)}
            </ul>
            <TextArea onChange={handleNewQuestionChange} labelText='' rows={3}/>
            <Button onClick={handleNewQuestionClick} type="button" text="Submit" classes="disabled blue ml-auto mt-4"/>
        </div>
    );
};

export default QuestionList;