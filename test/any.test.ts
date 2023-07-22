describe('Any', () => {
  it('should support any in typescript', () => {
    const person: any = {
      id: 1,
      name: 'Yudha',
      age: 20,
    };

    const person2: any = 'Yudha';
    person2.age = 20;

    person.name = 'Jennie';
    person.age = 28;
    person.address = 'South Korea';

    console.info(person);
  });
});
