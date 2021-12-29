const faker = require('faker');

const randomName = faker.name.firstName();
const lastName = faker.name.lastName();
console.log(`${randomName} ${lastName}`);