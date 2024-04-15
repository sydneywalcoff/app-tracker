import './assets/style.css'

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
        <>
            <h3 className="text-2xl mb-2">Questions</h3>
            <ul className="px-5">
                {questionList && questionList.map(question => <li className="list-disc mb-3" key={`${question._id}`}>{question.questionText}</li>)}
            </ul>
        </>
    );
};

export default Questions;