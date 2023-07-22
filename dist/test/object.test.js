"use strict";
describe('Object', () => {
    it('should support object', () => {
        const person = {
            id: '1',
            name: 'Yudha',
            age: 20,
        };
        person.name = 'Jennie';
        person.id = '2';
        console.info(person);
    });
});
