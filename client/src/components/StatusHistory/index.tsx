import './assets/styles.css';

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
        <div className={`status-history-comp h-full flex flex-col ${classes ? classes: ''}`}>
            <h4 className='font-bold'>History</h4>
            <div className="status-history h-full flex justify-center">
                <div className="line"/>
                <div className="stages-bg h-full flex flex-col justify-between items-center">
                { history && history.map(({status}) => (
                    <div className="stage" data-name={status.split(' ').join('-')}>
                        <div className="circle flex justify-center items-center">{status[0].toUpperCase()}</div>
                    </div>
                )) }
                { history && history[history.length -1].status !== 'offer' && history[history.length -1].status !== 'rejected' && (
                    <div className="stage" data-name='unknown'>
                        <div className="circle flex justify-center items-center">?</div>
                    </div>
                )}
                </div>
            </div>
        </div>
    );
};

export default StatusHistory;