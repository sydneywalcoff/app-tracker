import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_QUESTION, EDIT_QUESTION, REMOVE_QUESTION } from '../../utils/mutations';

import TextArea from '../TextArea';
import Button from '../Button';

import './assets/style.css'
import editBtn from '../../assets/edit.svg';
import deleteBtn from '../../assets/trash.svg';

interface IQuestionParams {
    question: IQuestion;
}

interface IQuestion {
    questionText: string;
    _id: String;
    lastUpdated: String;
    roleTag: String;
}

const Question = (params: IQuestionParams) => {
    const { question } = params;
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
        <li className="question" key={`${question._id}`}>
            {isEditing ?
                <div className="edit-container flex flex-col">
                    <TextArea
                        onChange={handleQuestionEditChange}
                        labelText=''
                        name={`${question._id}`}
                        rows={2}
                        value={question.questionText}
                    />
                    <Button text="Submit"
                        onClick={handleQuestionEditClick}
                        type="button" 
                        classes='blue ml-auto mt-4'
                    />
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

export default Question;