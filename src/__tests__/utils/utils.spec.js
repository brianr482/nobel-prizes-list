import { expect } from '@jest/globals';
import {
  upperFirst,
  getLaureateFullName,
  getLaureatesNumber,
  getLaureatesNames,
} from 'utils';

it('uppercase the first character of a string', () => {
  const name = 'fake name';
  expect(upperFirst(name)).toBe('Fake name');
});

it('returns empty string when passed empty string to upperFirst', () => {
  expect(upperFirst('')).toBe('');
});

it('get the fullname of a laureate', () => {
  const fakeLaureateWithSurname = { firstname: 'fake', surname: 'name' };
  expect(getLaureateFullName(fakeLaureateWithSurname)).toBe('fake name');

  const fakeLaureate = { firstname: 'fake' };
  expect(getLaureateFullName(fakeLaureate)).toBe('fake');
});

it('generate the proper label to indicate the total number of laureates', () => {
  expect(getLaureatesNumber(1)).toBe('1 laureate for this Nobel');

  expect(getLaureatesNumber(2)).toBe('2 laureates for this Nobel');
});

it('concat all the laureates names into single string separated by commas', () => {
  const fakeLaureates = [
    { firstname: 'fake', surname: 'name' },
    { firstname: 'fake2', surname: 'name2' },
  ];
  expect(getLaureatesNames(fakeLaureates)).toBe('fake name, and fake2 name2');

  const fakeLaureatesOneAuthor = [{ firstname: 'fake', surname: 'name' }];
  expect(getLaureatesNames(fakeLaureatesOneAuthor)).toBe('fake name');

  const fakeLaureatesListOfNames = ['fake name', 'fake2 name2'];
  expect(getLaureatesNames(fakeLaureatesListOfNames, true)).toBe(
    'fake name, and fake2 name2'
  );
});
