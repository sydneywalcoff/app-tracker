import { useState } from 'react';

import './assets/style.css'
import editBtn from '../../assets/edit.svg';
import deleteBtn from '../../assets/trash.svg';

interface IQuestionParams {
    questions: IQuestion[];
}

interface IQuestion {
    questionText: String;
    _id: String;
    lastUpdated: String;
    roleTag: String;
}

const Question = (question: IQuestion) => {
    const [isEditing, setIsEditing] = useState(false);

    const handleEditClick = () => {
        console.log('edit')
    };

    const handleTrashClick = () => {
        console.log('trash')
    };

    return (
        <li className="list-disc" key={`${question._id}`}>
            <div className="li-content mb-3 flex justify-between">
                <p className='flex items-center'>{question.questionText}</p>
                <div className="buttons flex ml-1">
                    <button onClick={handleEditClick}><img src={editBtn} alt="" /></button>
                    <button onClick={handleTrashClick}><img src={deleteBtn} alt="" /></button>
                </div>
            </div>
        </li>
    );
};

const Questions = ({ questions: questionList }: IQuestionParams) => {

    return (
        <div className='questions'>
            <h3 className="text-2xl mb-2">Questions</h3>
            <ul className="px-5 flex flex-col">
                {questionList && questionList.map(question => Question(question))}
            </ul>
        </div>
    );
};

export default Questions;