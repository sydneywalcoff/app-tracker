
interface JobProp {
    jobTitle: string;
    companyName: string;
    jobDescription: string;
    location: string;
    status: string;
    dateApplied: string;
}

interface FilterProps {
    filterTitle: string,
    filterOptions: JobProp[]
}
const FilterBar = ({ filterTitle, filterOptions }: FilterProps) => {
    const filterOptionVals: string[] = [];
    filterOptions.forEach(option => {
        if (filterTitle === 'Location' && !filterOptionVals.includes(option.location)) {
            filterOptionVals.push(option.location)
        }
    })

    return (
        <select className="mb-2 p-1 border-solid border-2">
            <option value="">Filter By {filterTitle}</option>
            {filterOptionVals.map(optionVal => (
                <option value={optionVal}>{optionVal}</option>
            ))}
        </select>
    );
};

export default FilterBar;