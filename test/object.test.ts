describe('Object', () => {
  it('should support object', () => {
    const person: { id: string; name: string; age: number } = {
      id: '1',
      name: 'Yudha',
      age: 20,
    };

    person.name = 'Jennie';
    person.id = '2';
    console.info(person);
  });
});
