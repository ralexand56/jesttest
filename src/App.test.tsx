import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Hi There');

  ReactDOM.unmountComponentAtNode(div);
});

it('adds numbers', () => {
  const add = (a: number, b: number) => a + b;

  expect(add(6, -1)).toBe(5);
});

it('palindrome', () => {
  const isPalindrome = (word: string) =>
    word
      .split('')
      .reverse()
      .join('');

  expect(isPalindrome('anna')).toBe('anna');
});

interface KeyVal {
  ind: number;
  misc: number;
  val: string;
}

it('getSubsequence', () => {
  const seq = (s1: string, s2: string) => {
    return s1.split('').reduce(
      (acc: KeyVal[], curr: string, ind: number) =>
        s2.indexOf(curr, acc.length > 0 ? acc[acc.length - 1].ind : 0) > -1
          ? [
              ...acc,
              {
                ind: s2.indexOf(curr),
                misc: acc.length > 0 ? acc[acc.length - 1].ind : 0,
                val: curr
              }
            ]
          : [...acc],
      []
    );
  };

  // expect(seq('ACBAZDC', 'AAABACB')).toEqual('ACB');
});

it('index of works', () => {
  const indOf = (str1: string, str2: string, fndInd: number) =>
    str1.indexOf(str2, fndInd);

  expect(indOf('AAABACB', 'A', 5)).toEqual(3);
});

const y = [
  { ind: 0, misc: 0, val: 'A' },
  { ind: 5, misc: 0, val: 'C' },
  { ind: 3, misc: 5, val: 'B' },
  { ind: 0, misc: 3, val: 'A' },
  { ind: 5, misc: 0, val: 'C' }
];
