describe('Type Alias', () => {
    it('should support in typescript', () => {
        const category = {
            id: 1,
            name: 'Laptop',
        };
        const product = {
            id: '1',
            name: 'Laptop',
            price: 5000,
            category: category,
        };
        category.name = 'Handphone';
        console.info(category);
        console.info(product);
    });
});
export {};
