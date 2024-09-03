const db = require('./connection');
import { faker } from '@faker-js/faker';

const { App, User } = require('../models');

db.once('open', async () => {
    // grab test account 

    // identify existing apps
    // delete existing apps
    // clear test account apps Array

    // create fake application data
    let fakeData = []
    let workStyles = ['remote', 'hybrid', 'on-site'];
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
        const atsScore = faker.datatype.boolean() ? faker.number.float({ min: 70, max: 100, multipleOf: 1 }) : 0;

        application["jobTitle"] = jobTitle;
        application["company"] = company;
        application["officeLocation"] = officeLocation;
        application["jobDescription"] = jobDescription;
        application["workStyle"] = workStyle;
        application["link"] = link;
        application["source"] = source;
        application["salary"] = salary;
        application["jobScore"] = atsScore;
        fakeData.push(application)
    }
    console.log(fakeData)

    // add fake data to test account

    process.exit();
})

export { }