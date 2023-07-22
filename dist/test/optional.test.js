"use strict";
describe('Optional', () => {
    it('should support null and undefind', () => {
        function sayHello(name) {
            if (name) {
                console.info(`hello ${name}`);
            }
            else {
                console.info('Hello');
            }
        }
        sayHello('Yudha');
        const name = undefined;
        sayHello(name);
        sayHello(null);
    });
});
