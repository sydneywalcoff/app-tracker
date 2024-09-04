const db = require('./connection');
import { faker } from '@faker-js/faker';

const { App, User, Question } = require('../models');

db.once('open', async () => {
    // grab test account 
    let username = 'testaccount';

    // identify existing apps
    const userData = await User.findOne({ username }).select('-__v -password').populate('apps');
    const { apps, _id } = userData;
    let questionsToDeleteById = []
    const appsToDeleteById = apps.map(app => {
        questionsToDeleteById = [...questionsToDeleteById, ...app.questions]
        return app._id;
    });

    // delete existing apps and associated Qs
    // await App.deleteMany({_id: { $in: appsToDeleteById }}, function(err) {})

    // await Question.deleteMany({_id: { $in: questionsToDeleteById }}, function(err) {})

    // clear test account apps Array

    // create fake application data
    let fakeData = []
    let workStyles = ['remote', 'hybrid', 'on-site'];
    let statusOptions = ['preparing', 'first interview', 'rejected', 'technical', 'phone screen', 'offer']
    for (let i = 0; i < 50; i++) {
        const application = {};
        const jobTitle = faker.person.jobTitle();
        const company = faker.company.name();
        const officeLocation = faker.location.city();
        const jobDescription = faker.lorem.paragraphs({ min: 3, max: 7 })
        const workStyle = workStyles[faker.number.int(2)];
        const link = faker.datatype.boolean() ? faker.internet.url() : '';
        const source = faker.datatype.boolean() ? 'LinkedIn' : '';
        const salary = faker.datatype.boolean() ? faker.number.float({ min: 65000, max: 100000, multipleOf: 1000 }) : '';
        const atsScore = faker.datatype.boolean() ? faker.number.int({ min: 70, max: 100 }) : 0;
        const status = faker.datatype.boolean() ? statusOptions[faker.number.int(statusOptions.length - 1)] : 'applied';

        application["jobTitle"] = jobTitle;
        application["company"] = company;
        application["officeLocation"] = officeLocation;
        application["jobDescription"] = jobDescription;
        application["workStyle"] = workStyle;
        application["link"] = link;
        application["source"] = source;
        application["salary"] = salary;
        application["jobScore"] = atsScore;
        application["status"] = status;
        fakeData.push(application);
    }
    console.log(fakeData)

    // add fake data to test account

    process.exit();
})

export { }