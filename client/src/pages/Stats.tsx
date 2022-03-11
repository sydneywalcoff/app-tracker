import AppCounter from '../components/AppCounter'

const Stats = () => {
    return (
        <div className="p-6">
            <h1 className='text-4xl underline text-gray-900 underline-gray-900 mb-4'>Stats</h1>
            <div>
                <AppCounter />
            </div>
        </div>
    );
};

export default Stats;