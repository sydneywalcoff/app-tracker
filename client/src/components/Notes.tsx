import { useState, ChangeEvent } from 'react';

const Notes = () => {
    const [noteText, setNoteText] = useState('');
    const notes = [1,2,3,4,5];
    const addNote = () => {
        console.log(noteText)
    };

    const handleChange = (e: ChangeEvent<HTMLTextAreaElement>) => {
        const { value } = e.target;
        setNoteText(value);
    };

    return (
        <>
            <h3 className="text-2xl mb-2">Notes</h3>
            <div>
                {notes.map((note, i) => (
                    <ul key={i} className="px-5">
                        <li className="list-disc mb-3">{note}</li>
                    </ul>
                ))}
            </div>
            <div className="flex flex-col">
                <textarea className="w-full h-half border-solid border-2 p-1" onChange={handleChange}></textarea>
                <button
              type="button"
              className=" justify-center ml-auto my-2 py-2 px-4 border border-transparent shadow-sm text-sm font-medium rounded-md text-white bg-indigo-600 hover:bg-indigo-700 focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-indigo-500"
              onClick={addNote}
            >
              Add Note.
            </button>
            </div>
        </>
    );
}

export default Notes;