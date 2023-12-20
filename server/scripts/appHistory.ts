const db = require('../config/connection');

const { App } = require('../models');

const updateAppHistory = async () => {
    const appsData = await App.where({ statusHistory: [] });
    const lastUpdated = Date.now();
    const appliedObj = {
        dateChanged: lastUpdated,
        status: 'applied'
    }
    for(let i =0; i < appsData.length; i++) {
        const currApp = appsData[i];
        const { status, _id} = currApp;
        let history;
        const statusObj = {
            dateChanged: lastUpdated,
            status: status
        }

        if(status == 'preparing' || status == 'applied') {
            history = [statusObj]
        } else {
            history = [appliedObj, statusObj]
        }
        console.log('start')
        await App.findByIdAndUpdate(_id, { statusHistory: history}, { new: true});
    }
};

updateAppHistory();
export { }