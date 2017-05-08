const _ = require('../underbar');

describe('uniq()', () => {
  it('de-dups a list of numbers', () => {
    const nums = [2, 4, 5, 5, 7, 4, 10, 2];
    expect(_.uniq(nums)).toEqual([2, 4, 5, 7, 10]);
  });

  it('de-dups values in an object', () => {
    const obj = {
  dog: "german shepherd",
  cat: "tiger",
  snake: "viper",
  fish: "shark",
  cat: "tiger"
};
    expect(_.uniq(obj)).toEqual([
  "german shepherd",
  "tiger",
  "viper",
  "shark"  
  ]);
});
});