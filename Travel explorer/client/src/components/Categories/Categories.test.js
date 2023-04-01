import { render, screen } from '@testing-library/react';
import { MemoryRouter } from 'react-router-dom';
import { Categories } from './Categories';

test('Displays the categories section heading', () => {
  render(
    <MemoryRouter>
      <Categories />
    </MemoryRouter>
  );
  const heading = screen.getByText('Luxury Travel');
  expect(heading).toBeInTheDocument();
});
