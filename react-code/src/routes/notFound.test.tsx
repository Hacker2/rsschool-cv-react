import React from 'react';
import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import NotFound from './notFound';

test('renders Not found', () => {
  render(
    <MemoryRouter>
      <NotFound />
    </MemoryRouter>
  );
  const element = screen.getByText(/Page not found!/i);
  expect(element).toBeInTheDocument();
});
