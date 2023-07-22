describe('Optional', () => {
  it('should support null and undefind', () => {
    function sayHello(name?: string | null) {
      if (name) {
        console.info(`hello ${name}`);
      } else {
        console.info('Hello');
      }
    }

    sayHello('Yudha');
    const name: string | undefined = undefined;
    sayHello(name);
    sayHello(null);
  });
});
