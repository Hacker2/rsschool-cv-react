import React from 'react';
import { render, screen } from '@testing-library/react';
import AboutUs from './aboutUs';
import { MemoryRouter } from 'react-router-dom';

test('renders About us', () => {
  render(
    <MemoryRouter>
      <AboutUs />
    </MemoryRouter>
  );
  const element = screen.getByText(/About us/i);
  expect(element).toBeInTheDocument();
});
