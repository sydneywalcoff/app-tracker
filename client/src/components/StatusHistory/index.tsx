interface StatusHistoryObj {
    dateChanged: String,
    status: String
}

interface StatusHistoryI {
    classes?: string,
    history: [StatusHistoryObj]
}

const StatusHistory = ({ classes, history }: StatusHistoryI) => {

    return (
        <div className={`status-history-comp ${classes}`}>
            <h4>History</h4>
            <div className="status-history">

            </div>
        </div>
    );
};

export default StatusHistory;