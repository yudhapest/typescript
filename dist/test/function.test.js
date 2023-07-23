"use strict";
describe('Function', () => {
    it('should support in typescript', () => {
        function sayHello(name) {
            return `hello ${name}`;
        }
        expect(sayHello('yudha')).toBe('hello yudha');
        function printHello(name) {
            console.info(`hello ${name}`);
        }
        printHello('yudha');
    });
    it('should support default value typescript', () => {
        function sayHello(name = 'Guest') {
            return `hello ${name}`;
        }
        expect(sayHello('yudha')).toBe('hello yudha');
        expect(sayHello()).toBe('hello Guest');
    });
    it('should support rest parameter typescript', () => {
        function sum(...values) {
            let total = 0;
            for (const value of values) {
                total += value;
            }
            return total;
        }
        expect(sum(1, 2, 3)).toBe(6);
    });
    it('should support optional parameter typescript', () => {
        function sayHello(firstname, lastname) {
            if (lastname) {
                return `hello ${firstname} ${lastname}`;
            }
            else {
                return `hello ${firstname}`;
            }
        }
        expect(sayHello('yudha')).toBe('hello yudha');
        expect(sayHello('yudha', 'irmawan')).toBe('hello yudha Jennie');
    });
    it('should support function overload typescript', () => {
        function callMe(values) {
            if (typeof values === 'number') {
                return values * 2;
            }
            else if (typeof values === 'string') {
                return values.toUpperCase();
            }
        }
        expect(callMe(1)).toBe(2);
        expect(callMe('yudha')).toBe('YUDHA');
    });
    it('should function as parameter typescript', () => {
        function sayHello(name, filter) {
            return 'Hello ${filter(name)}';
        }
        function toUpper(name) {
            return name.toUpperCase();
        }
        expect(sayHello('yudha', toUpper)).toBe('HELLO YUDHA');
        expect(sayHello('yudha', function (name) {
            return name.toUpperCase();
        })).toBe('HELLO YUDHA');
        expect(sayHello('yudha', (name) => name.toUpperCase())).toBe('HELLO YUDHA');
    });
});
