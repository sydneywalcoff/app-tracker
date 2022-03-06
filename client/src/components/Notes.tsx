import { useState, ChangeEvent } from 'react';
import { useMutation } from '@apollo/client';
import { ADD_NOTE } from '../utils/mutations';

type Note = {
    _id: string,
    noteText: string
}

interface NoteProp{
    postId: string | undefined, 
    notes: Note[]
}

const Notes =  ({ notes, postId }: NoteProp) => {
    const [noteText, setNoteText] = useState('');
    const [addNote] = useMutation(ADD_NOTE);
    const submitNote = async () => {
        await addNote({ variables: { noteText, postId } });
        
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setNoteText(value);
    };

    return (
        <>
            <h3 className="text-2xl mb-2">Notes</h3>
            <div>
                {notes ? (notes.map((note: Note, i: number) => (
                    <ul key={i} className="px-5">
                        <li className="list-disc mb-3">{note.noteText}</li>
                    </ul>
                ))) : (<p className='text-md font-bold my-3'>no notes yet :(</p>)}
            </div>
            <div className="flex flex-col">
                <textarea className="w-full h-half border-solid border-2 p-1" onChange={handleChange} placeholder='take notes...'></textarea>
                <button
              type="button"
              className=" justify-center ml-auto my-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={submitNote}
            >
              Add Note.
            </button>
            </div>
        </>
    );
}

export default Notes;