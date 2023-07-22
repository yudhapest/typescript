"use strict";
describe('Union Type', () => {
    it('should support union typescript', () => {
        let sample = 10;
        console.info(sample);
        sample = 'Yudha';
        console.info(sample);
        sample = true;
        console.info(sample);
    });
    it('should support rtpeOf operator typescript', () => {
        function process(value) {
            if (typeof value === 'number') {
                return value * 2;
            }
            else if (typeof value === 'string') {
                return value.toUpperCase();
            }
            else {
                return !value;
            }
        }
        expect(process(10)).toBe(20);
        expect(process('Yudha')).toBe('YUDHA');
        expect(process(true)).toBe(false);
    });
});
