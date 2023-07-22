describe('Interface', () => {
    it('should support typescript', () => {
        const seller = {
            id: 1,
            name: 'Jennie',
            nim: 'A11201810954',
            npwp: '8897683562',
        };
        seller.name = 'Jisoo';
        console.info(seller);
    });
    it('should support function interface typescript', () => {
        const add = (value1, value2) => {
            return value1 + value2;
        };
        expect(add(10, 20)).toBe(30);
    });
    it('should support indexable interface typescript', () => {
        const names = ['Yudha', 'Jennie'];
        console.info(names);
    });
    it('should support indexable interface for non number index typescript', () => {
        const names = {
            name: 'Yudha',
            address: 'Semarang',
        };
        expect(names.name).toBe('Yudha');
        expect(names.address).toBe('Semarang');
    });
    it('should support extends interface typescript', () => {
        const employe = {
            id: 1,
            name: 'Jennie',
            division: 'IT',
        };
        console.info(employe);
        const manager = {
            id: 2,
            name: 'Yudha',
            division: 'IT',
            numberOfEmployees: 21,
        };
        console.info(manager);
    });
    it('should support function in interface typescript', () => {
        const names = {
            name: 'Yudha',
            sayHello: function (name) {
                return `hello ${name}, my name in ${this.name}`;
            },
        };
        console.info(names.sayHello('Jennie'));
    });
});
export {};
