describe('Array', () => {
  it('should same with array', () => {
    const names: String[] = ['Yudha', 'Irmawan'];
    const age: number[] = [20, 30];

    console.info(names);
    console.info(age);

    names[0] = 'Jennie';
    console.info(names);
  });

  it('should support readonly array', () => {
    const hobbies: ReadonlyArray<String> = ['coding', 'game'];
    console.info(hobbies);

    //hobbies[0] = 'training'; // error because of readonly
  });

  it('should support tuple', () => {
    const person: readonly [string, string, number] = ['Yudha', 'Irmawan', 20];
    console.info(person);
  });
});
