import { ChangeEvent, Dispatch, } from 'react';

interface SearchBarProps {
    searchText: string,
    setSearchText: Dispatch<string>
}

const SearchBar = (props: SearchBarProps) => {
    const { setSearchText, searchText } = props;
    const handleSearchChange = (e: ChangeEvent<HTMLInputElement>) => {
        const { value } = e.target;
        setSearchText(value);
    };

    const handleClearClick = () => {
        setSearchText('');
    }

    return (
        <div className='my-4 flex w-1/3'>
            <label htmlFor="search" className="font-bold">Search:</label>
            <input name="search" type="text" className="focus:ring-indigo-500 focus:border-indigo-500 block w-full shadow-md sm:text-sm border-gray-300 rounded-md ml-2 px-1" value={searchText} onChange={handleSearchChange} />
            <div className="clear ml-1 cursor-pointer underline" onClick={handleClearClick}>x</div>
        </div>
    );
};

export default SearchBar;