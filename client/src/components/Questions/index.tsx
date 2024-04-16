import { ChangeEvent, useState } from 'react';

import TextArea from '../TextArea';
import Button from '../Button';

import './assets/style.css'
import editBtn from '../../assets/edit.svg';
import deleteBtn from '../../assets/trash.svg';

interface IQuestionParams {
    questions: IQuestion[];
}

interface IQuestion {
    questionText: string;
    _id: String;
    lastUpdated: String;
    roleTag: String;
}

const Question = (question: IQuestion) => {
    const [isEditing, setIsEditing] = useState(false);
    const [editText, setEditText] = useState('');

    const handleEditClick = () => {
        setIsEditing(true);
    };

    const handleTrashClick = () => {
        console.log('trash')
    };
    const handleQuestionEditChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        setEditText(e.target.value);
    };

    const handleQuestionEditClick = () => {
        console.log(editText)
    };

    return (
        <li className="" key={`${question._id}`}>
            {isEditing ? 
                <div className="edit-container">
                    <TextArea 
                    onChange={handleQuestionEditChange} 
                    labelText=''
                    name={`${question._id}`}
                    rows={2}
                    value={question.questionText}
                    />
                    <Button text="Submit" 
                    onClick={handleQuestionEditClick} 
                    type="button"  />
                </div> 
                : <div className="li-content mb-3 flex justify-between">
                <p className='flex items-center'>{question.questionText}</p>
                <div className="buttons flex ml-1">
                    <button onClick={handleEditClick}><img src={editBtn} alt="click to edit this question" /></button>
                    <button onClick={handleTrashClick}><img src={deleteBtn} alt="click to delete this question" /></button>
                </div>
            </div>}
        </li>
    );
};

const Questions = ({ questions: questionList }: IQuestionParams) => {
    // const [newQuestionText, setNewQuestionText] = useState('');

    
    const handleNewQuestionClick = () => {
        // console.log(newQuestionText)
    };

    const handleNewQuestionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        // setNewQuestionText(e.target.value);
    };

    return (
        <div className='questions'>
            <h3 className="text-2xl mb-2">Questions</h3>
            <ul className="px-5 flex flex-col">
                {questionList && questionList.map(question => Question(question))}
            </ul>
            <TextArea onChange={handleNewQuestionChange} labelText='' rows={3}/>
            <Button onClick={handleNewQuestionClick} type="button" text="Submit" classes="disabled"/>
        </div>
    );
};

export default Questions;