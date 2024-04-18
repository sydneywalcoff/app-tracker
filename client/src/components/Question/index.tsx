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
    const [editText, setEditText] = useState(question.questionText);

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

    const handleCancelEditClick = () => {
        setIsEditing(false);
        setEditText(question.questionText);
    };

    return (
        <li className="question" key={`${question._id}`}>
            {isEditing ?
                <div className="edit-container">
                    <TextArea
                        onChange={handleQuestionEditChange}
                        labelText=''
                        name={`${question._id}`}
                        rows={2}
                        value={editText}
                    />
                    <div className="flex justify-end my-2 items-center">
                        <p onClick={handleCancelEditClick} className='mr-2 cancel-btn'>Cancel</p>
                        <Button text="Submit"
                            onClick={handleQuestionEditClick}
                            type="button"
                            classes='blue'
                        />
                    </div>
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