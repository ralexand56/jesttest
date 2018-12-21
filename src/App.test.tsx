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

  expect(add(2, 3)).toBe(5);
})
