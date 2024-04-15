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
            <ul className="px-5">
                {questionList && questionList.map(question => {
                    return (
                        <li className="list-disc mb-3 flex" key={`${question._id}`}>
                            <p>{question.questionText}</p>
                            <div className="buttons flex">
                                <img src={editBtn} alt="" />
                                <img src={deleteBtn} alt="" />
                            </div>
                        </li>
                    );
                })}
            </ul>
        </div>
    );
};

export default Questions;