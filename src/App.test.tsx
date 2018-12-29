import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';

it('renders without crashing', () => {
  const div = document.createElement('div');
  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toContain('Hi There');

  ReactDOM.unmountComponentAtNode(div);
});

it('doesnt crash', () => {
  const div = document.createElement('div');

  ReactDOM.render(<App />, div);

  expect(div.innerHTML).toBeTruthy();

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

it('getSubsequence', () => {
  const seq = (s1: string, s2: string) => {
    return s1
      .split('')
      .reduce(
        (acc: Record<string, number>[], curr: string, ind: number) =>
          s2.split('').indexOf(curr, ind) > -1
            ? [...acc, { [curr]: s2.split('').indexOf(curr, ind) }]
            : [...acc],
        [],
      )
      .map(x => Object.keys(x));
  };

  // expect(seq('ABAZDC', 'BACBAD')).toBe([]);
});
