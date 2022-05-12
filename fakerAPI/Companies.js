const { faker } = require('@faker-js/faker')

class Companies {
    constructor() {
        this.name = faker.company.companyName()
        this.address = {'street': faker.address.streetName(), 'city': faker.address.city(),'state': faker.address.state(),'zip': faker.address.zipCode(),'country': faker.address.country()}
    }
}

module.exports = Companies