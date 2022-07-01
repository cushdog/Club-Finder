import { render, screen } from '@testing-library/react';
import App from './App';

//Allows you to run automated tests for the UI, tells you if the test ran successfully

test('renders learn react link', () => {
  render(<App />);
  const linkElement = screen.getByText(/learn react/i);
  expect(linkElement).toBeInTheDocument();
});
