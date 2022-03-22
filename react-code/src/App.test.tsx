import React from 'react';
import { render, screen } from '@testing-library/react';
import App from './App';
import { MemoryRouter } from 'react-router-dom';

test('renders Search test', () => {
  render(
    <MemoryRouter>
      <App />
    </MemoryRouter>
  );
  const searchElement = screen.getByText(/Search/i);
  expect(searchElement).toBeInTheDocument();
});
