describe('If', () => {
  it('should support in typescript', () => {
    const value: number = 90;

    if (value > 80) {
      console.info('A');
    } else if (value > 60) {
      console.info('B');
    } else {
      console.info('C');
    }
  });

  it('should support ternary operator typescript', () => {
    const value: number = 80;
    const say = value >= 75 ? 'Good' : 'Try again';

    console.info(say);
  });

  it('should support switch typescript', () => {
    function sayHello(name: string): string {
      switch (name) {
        case 'yudha':
          return 'hello yudha';
        case 'jennie':
          return 'hello Jennie';
        default:
          return 'hello Guest';
      }
    }

    console.info(sayHello('yudha'));
    console.info(sayHello('jennie'));
    console.info(sayHello('guest'));
  });
});
