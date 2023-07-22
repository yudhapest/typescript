import { CustomerType } from '../src/enum';
describe('Enum', () => {
    it('should support enum', () => {
        const customer = {
            id: '1',
            name: 'Jennie',
            type: CustomerType.VIP,
        };
        console.info(customer);
    });
});
