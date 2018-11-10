
class Human {
  public name: string;

  constructor(name: string) {
    this.name = name;
  }
}

const testName = 'malik';

describe('human', () => {
  it('1_equals_1', () => {
    expect(1).toEqual(1);
  });
});
