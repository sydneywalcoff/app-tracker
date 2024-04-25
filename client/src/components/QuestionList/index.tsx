import { ChangeEvent, useState } from 'react';
import { useMutation } from '@apollo/client';

import { ADD_QUESTION } from '../../utils/mutations';

import TextArea from '../TextArea';
import Button from '../Button';
import Question from '../Question';

import './assets/style.css'
import { QUERY_SINGLE_APP } from '../../utils/queries';

interface IQuestionParams {
    questions: IQuestion[],
    appId: string | undefined,
}

interface IQuestion {
    questionText: string;
    _id: String;
    lastUpdated: String;
    roleTag: String;
}

const QuestionList = ({ questions: questionList, appId }: IQuestionParams) => {
    const [newQuestionText, setNewQuestionText] = useState('');
    const [isDisabled, setIsDisabled] = useState(true);
    const [addQuestion] = useMutation(ADD_QUESTION, {
        update(cache, { data: { addQuestion } }) {
            try {
                cache.updateQuery({
                    query: QUERY_SINGLE_APP,
                    variables: {
                        id: appId
                    }
                }, ({ app }) => ({
                    app: {
                        ...app,
                        questions: app.questions
                    }
                }))
            } catch (e) {
                console.error(e);
            }
        }
    })

    const handleNewQuestionClick = async () => {
        try {
            await addQuestion({ variables: { questionText: newQuestionText, appId } });
            setNewQuestionText('');
        } catch (e) {
            console.log(e)
        }
    };

    const handleNewQuestionChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setNewQuestionText(value);
        if (value.length > 0) {
            setIsDisabled(false);
            return;
        }
        setIsDisabled(true);
    };

    return (
        <div className='questions flex flex-col'>
            <h3 className="text-2xl mb-2">Questions</h3>
            <ul className="px-5 flex flex-col">
                {questionList && questionList.map(question => <Question question={question} key={`Question${question._id}`} />)}
            </ul>
            <TextArea onChange={handleNewQuestionChange} labelText='' rows={3} value={newQuestionText}/>
            <Button onClick={handleNewQuestionClick} type="button" text="Submit" classes={`${isDisabled && 'disabled'} blue ml-auto mt-4`} />
        </div>
    );
};

export default QuestionList;