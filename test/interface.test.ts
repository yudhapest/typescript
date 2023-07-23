import { Employe, Manager } from '../src/employes';
import { Person } from '../src/person';
import { Seller } from '../src/seller';

describe('Interface', () => {
  it('should support typescript', () => {
    const seller: Seller = {
      id: 1,
      name: 'Jennie',
      nim: 'A11201810954',
      npwp: '8897683562',
    };

    seller.name = 'Jisoo';
    console.info(seller);
  });

  it('should support function interface typescript', () => {
    interface AddFuntion {
      (value1: number, value2: number): number;
    }

    const add: AddFuntion = (value1: number, value2: number) => {
      return value1 + value2;
    };

    expect(add(10, 20)).toBe(30);
  });

  it('should support indexable interface typescript', () => {
    interface StringArray {
      [index: number]: string;
    }

    const names: StringArray = ['Yudha', 'Jennie'];
    console.info(names);
  });

  it('should support indexable interface for non number index typescript', () => {
    interface StringDictionart {
      [key: string]: string;
    }

    const names: StringDictionart = {
      name: 'Yudha',
      address: 'Semarang',
    };

    expect(names.name).toBe('Yudha');
    expect(names.address).toBe('Semarang');
  });

  it('should support extends interface typescript', () => {
    const employe: Employe = {
      id: 1,
      name: 'Jennie',
      division: 'IT',
    };

    console.info(employe);

    const manager: Manager = {
      id: 2,
      name: 'Yudha',
      division: 'IT',
      numberOfEmployees: 21,
    };

    console.info(manager);
  });

  it('should support function in interface typescript', () => {
    interface Person {
      name: string;
      sayHello(name: string): string;
    }

    const names: Person = {
      name: 'Yudha',
      sayHello: function (name: string): string {
        return `hello ${name}, my name in ${this.name}`;
      },
    };

    console.info(names.sayHello('Jennie'));
  });

  it('should support intersection types typescript', () => {
    interface HasName {
      name: string;
    }

    interface HasId {
      id: string;
    }

    //interface Person extends HasName, HasId {}

    type Domain = HasName & HasId;

    const domain: Domain = {
      id: '1',
      name: 'Yudha',
    };

    console.info(domain);
  });

  it('should support type assertion typescript', () => {
    const person: any = {
      id: 1,
      name: 'Yudha',
      age: 20,
    };

    const person2: any = person as Person;
    console.info(person2);
  });
});
