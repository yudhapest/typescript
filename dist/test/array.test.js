"use strict";
describe('Array', () => {
    it('should same with array', () => {
        const names = ['Yudha', 'Irmawan'];
        const age = [20, 30];
        console.info(names);
        console.info(age);
        names[0] = 'Jennie';
        console.info(names);
    });
    it('should support readonly array', () => {
        const hobbies = ['coding', 'game'];
        console.info(hobbies);
        //hobbies[0] = 'training'; // error because of readonly
    });
    it('should support tuple', () => {
        const person = ['Yudha', 'Irmawan', 20];
        console.info(person);
    });
});
