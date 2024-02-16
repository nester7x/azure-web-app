import { isFirstSymbol, isValidSymbols } from './emailCheck';

export const validate = (fieldName, value) => {
  const error = [];
  switch (fieldName) {
    case 'email':
      if (!value) {
        error.push('Email address is required');
      } else {
        if (!isFirstSymbol(value)) {
          error.push('First symbol must be a letter');
        }
        if (!isValidSymbols(value)) {
          error.push('Invalid email(example: test1.2kek-lol@gmail.com)');
        }
      }
      break;

    default:
  }
  return error.join('.\n');
};
