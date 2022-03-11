const AppCounter = () => {
    const numOfApps= 8;

    return (
        <div className="max-w-sm rounded overflow-hidden shadow-lg flex flex-col align-center p-4 my-4">
            <h2 className="text-center text-sm">you've applied for</h2>
            <h1 className="text-6xl text-center">{numOfApps}</h1>
            <h2 className="text-center text-sm">applications today</h2>
        </div>
    );
};

export default AppCounter;