import { render, screen } from '@testing-library/react';
import { Search } from './Search';

test('renders search form', () => {
  render(<Search />);
  const countryInput = screen.getByPlaceholderText('Country');
  const categoryInput = screen.getByPlaceholderText('Category');
  const maxPriceInput = screen.getByPlaceholderText('Max price');
  const nightsInput = screen.getByPlaceholderText('Nighs');
  const searchButton = screen.getByRole('button', { name: 'Search' });
  expect(countryInput).toBeInTheDocument();
  expect(categoryInput).toBeInTheDocument();
  expect(maxPriceInput).toBeInTheDocument();
  expect(nightsInput).toBeInTheDocument();
  expect(searchButton).toBeInTheDocument();
});
