import { Category, Product } from '../src/type-alias';

describe('Type Alias', () => {
  it('should support in typescript', () => {
    const category: Category = {
      id: 1,
      name: 'Laptop',
    };

    const product: Product = {
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
