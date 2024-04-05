import './assets/style.css'

const Questions = () => {
    const questionList = ['What is the breakdown of the team and who does what?', 'What are you most excited about having a new person in this role?', 'What is your biggest pain point? How will this role alleviate that?', 'What advice would you give someone through the rest of the interviewing process?', 'What is the rest of the hiring process?'];

    return (
        <>
            <h3 className="text-2xl mb-2">Questions</h3>
            <ul className="px-5">
                {questionList && questionList.map((question, i) => <li className="list-disc mb-3" key={`question${i}`}>{question}</li>)}
            </ul>
        </>
    );
};

export default Questions;