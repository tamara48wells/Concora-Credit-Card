import { render, screen } from '@testing-library/react';
import App from './App';

test('renders header', () => {
  render(<App />);
  const headerElement = screen.getByText(/Concora Credit Card/i);
  expect(headerElement).toBeInTheDocument();
});
