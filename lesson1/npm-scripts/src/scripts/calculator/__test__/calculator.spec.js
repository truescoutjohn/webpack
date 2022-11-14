import { sum, mult } from '../calculator';

it('Sum of two numbers', () => {
  expect(sum(2, 2)).toEqual(4);
  expect(sum(2, 2)).not.toEqual(5);
});

it('Multiply of two numbers', () => {
  expect(mult(2, 2)).toEqual(4);
  expect(mult(2, 2)).not.toEqual(5);
});
