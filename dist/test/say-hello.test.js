import { sayHello } from '../src/say-hello';
describe('sayHello', () => {
    it('should return hello yudha', () => {
        const name = 'yudha';
        expect(sayHello(name)).toBe('hello yudha');
    });
});
