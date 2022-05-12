const { faker } = require('@faker-js/faker')

class Users {
    constructor() {
        this.password = faker.internet.password()
        this.email = faker.internet.email()
        this.phoneNumber = faker.phone.phoneNumber()
        this.firstName = faker.name.firstName()
        this.lastName = faker.name.lastName()
        this.id = faker.datatype.number()
    }
}

module.exports = Users