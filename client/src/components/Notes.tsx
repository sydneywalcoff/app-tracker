const Notes = () => {
    const notes = [1,2,3,4,5];
    const addNote = () => {
        console.log('adding a new note')
    };
    return (
        <>
            <h3 className="text-2xl mb-2">Notes</h3>
            <div>
                {notes.map((note, i) => (
                    <div key={i}>
                        <p>{note}</p>
                    </div>
                ))}
            </div>
            <div className="flex flex-col">
                <textarea className="w-full h-half border-solid border-2"></textarea>
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