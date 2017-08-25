const expect = require('chai').expect;
const generateUserArray = require('../routes/users').generateUserArray;

describe('Users Route', function (){
    describe('#generateUserArray', function (){
        it('should generate an array of users of the given size', function () {
            const users = generateUserArray(10);
            users.forEach((user) => {
                expect(users).to.have.lengthOf(10);
                expect(user).to.have.property('firstName');
                expect(user).to.have.property('lastName');
                expect(user).to.have.property('userName');
                expect(user).to.have.property('email');
            });
        });
    });
});