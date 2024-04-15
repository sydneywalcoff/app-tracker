import './assets/style.css'
import editBtn from '../../assets/edit.svg';
import deleteBtn from '../../assets/trash.svg';

interface IQuestionParams {
    questions: Question[];
}

type Question = {
    questionText: String;
    _id: String;
    lastUpdated: String;
    roleTag: String;
}

const Questions = ({ questions: questionList }: IQuestionParams) => {

    return (
        <div className='questions'>
            <h3 className="text-2xl mb-2">Questions</h3>
            <ul className="px-5 flex flex-col">
                {questionList && questionList.map(question => {
                    return (
                        <li className="list-disc" key={`${question._id}`}>
                            <div className="li-content mb-3 flex justify-between">
                                <p className='flex items-center'>{question.questionText}</p>
                                <div className="buttons flex ml-1">
                                    <button><img src={editBtn} alt="" /></button>
                                    <button><img src={deleteBtn} alt="" /></button>
                                </div>
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Questions;