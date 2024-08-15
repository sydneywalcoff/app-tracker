require('dotenv').config();
const db = require('../config/connection');

const { App } = require('../models');

const createLocationObj = async () => {
    const data = await App.find()
    let filtered = data.filter(n => !n.locationObj)
    const lastUpdated = Date.now();
    for (let i = 0; i < filtered.length; i++) {
        const locationObj = {
            workStyle: '',
            officeLocation: ''
        }
        const currApp = filtered[i];
        const { location, _id } = currApp;
        if (location.toUpperCase() === 'REMOTE') { 
            locationObj.workStyle = 'remote' 
        } else {
            locationObj.officeLocation = location;
        }
        await App.findByIdAndUpdate(_id, { lastUpdated, locationObj }, { new: true });
    }
    console.log('done')
    process.exit(1)
};

createLocationObj();
export { }