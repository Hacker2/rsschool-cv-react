import React from 'react';
import { render, screen } from '@testing-library/react';
import Card from './Card';
import { MemoryRouter } from 'react-router-dom';

test('renders Card', () => {
  let johnDoe = 'John Doe';
  render(
    <MemoryRouter>
      <Card key="1" img="test.img" cardName={johnDoe} createBy="testAuthor" />
    </MemoryRouter>
  );
  checkCardExist(johnDoe);
});

test('renders Card list', () => {
  let johnDoe = 'John Doe';
  let mikeDoe = 'Mike Doe';
  let denDoe = 'Den Doe';
  render(
    <MemoryRouter>
      <Card key="1" img="test.img" cardName={johnDoe} createBy="testAuthor" />
      <Card key="2" img="test.img" cardName={mikeDoe} createBy="testAuthor" />
      <Card key="3" img="test.img" cardName={denDoe} createBy="testAuthor" />
    </MemoryRouter>
  );
  checkCardExist(johnDoe);
  checkCardExist(mikeDoe);
  checkCardExist(denDoe);
});

function checkCardExist(personName: string) {
  let johnDoeRegEx = new RegExp(personName, 'i');
  const element = screen.getByText(johnDoeRegEx);
  expect(element).toBeInTheDocument();
}
