import { render, screen } from '@testing-library/react';
import { NotFound } from './NotFound';
import { BrowserRouter } from 'react-router-dom';

describe('NotFound', () => {
  it('renders the not found page', () => {
    render(<BrowserRouter><NotFound /></BrowserRouter>);

    expect(screen.queryByText('Page not found')).toBeInTheDocument();
    expect(screen.queryByText('404')).toBeInTheDocument();
    expect(screen.queryByText('The page you were looking for does not exist... :(')).toBeInTheDocument();
  });

});
