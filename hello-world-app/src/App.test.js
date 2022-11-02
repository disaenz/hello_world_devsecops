import { render, screen } from '@testing-library/react';
import App from './App';

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/Cesar/i);
  expect(linkElement).toBeInTheDocument();
});

test('second test', () => {
  render(<App />);
  const one = 1;
  const two = 2;
  var sum = one + two;
  // expect(true);
});

test('third test', () => {
  render(<App />);
  const one = 1;
  const two = 2;
  var sum = one + two;
  // expect(true);
});

test('fourth test', () => {
  render(<App />);
  const one = 1;
  const two = 2;
  var sum = one + two;
  // expect(true);
});

test('fifth test', () => {
  render(<App />);
  const one = 1;
  const two = 2;
  var sum = one + two;
  // expect(true);
});