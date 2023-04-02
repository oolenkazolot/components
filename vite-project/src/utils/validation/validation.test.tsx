import { isValidationName, isValidationDate } from './validation';

describe('Validation', () => {
  it('first and last name must start with a capital letter', () => {
    expect(isValidationName('alex Smit')).toBe(false);
  });

  it('first and last name must start with a capital letter', () => {
    expect(isValidationName('Alex smit')).toBe(false);
  });

  it('first and last name must be spelled', () => {
    expect(isValidationName('1111 1111')).toBe(false);
  });

  it('date must be digits', () => {
    expect(isValidationDate('ff19-ff-31')).toBe(false);
  });

  it('the date must not be greater than the current date', () => {
    expect(isValidationName('2024-03-30')).toBe(false);
  });
});
