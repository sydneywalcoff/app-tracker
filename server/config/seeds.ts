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
    if (appsToDeleteById.length > 0) {
        await App.deleteMany({ _id: { $in: appsToDeleteById } }, function (err) { }).clone();
        console.log("existing apps deleted");
    }

    if (questionsToDeleteById.length > 0) {
        await Question.deleteMany({ _id: { $in: questionsToDeleteById } }, function (err) { }).clone();
        console.log('existing questions deleted')
    }

    // create fake application data
    const lastUpdated = Date.now();
    let fakeData = []
    let workStyles = ['remote', 'hybrid', 'on-site'];
    let statusOptions = ['preparing', 'first interview', 'rejected', 'technical', 'phone screen', 'offer']
    const basicQuestionsList = [
        'What is the breakdown of the team and who does what?',
        'What are you most excited about having a new person in this role?',
        'What is your biggest pain point? How will this role alleviate that?',
        'What advice would you give someone through the rest of the interviewing process?',
        'What is the rest of the hiring process?'
    ];
    const questionsList = basicQuestionsList.map(question => {
        return {
            questionText: question,
            roleTag: '',
            lastUpdated
        };
    })

    for (let i = 0; i < 50; i++) {
        const questionData = await Question.create(questionsList);
        const application = {
            locationObj: {}
        };
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
        application["companyName"] = company;
        application["locationObj"]["officeLocation"] = officeLocation;
        application["jobDescription"] = jobDescription;
        application["locationObj"]["workStyle"] = workStyle;
        application["link"] = link;
        application["source"] = source;
        application["salary"] = salary;
        application["jobScore"] = atsScore;
        application["status"] = status;
        application["questions"] = questionData.map(question => question._id);
        fakeData.push(application);
    }

    const newApps = await App.create(fakeData);

    // add fake data to test account
    const userDataAfter = await User.findByIdAndUpdate(_id,
        { apps: newApps },
        { new: true }
    );
    console.log(`done adding ${userDataAfter.apps.length} applications`);
    process.exit();
})

export { }