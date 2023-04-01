import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { Footer } from './Footer';

describe('Footer', () => {
  it('renders the correct links', () => {
    render(
      <BrowserRouter>
        <Footer />
      </BrowserRouter>
    );

    const homeLink = screen.getByRole('link', { name: /home/i });
    expect(homeLink).toBeInTheDocument();

    const aboutLink = screen.getByRole('link', { name: /about us/i });
    expect(aboutLink).toBeInTheDocument();

    const tipsLink = screen.getByRole('link', { name: /tips/i });
    expect(tipsLink).toBeInTheDocument();

    const createLink = screen.getByRole('link', { name: /create/i });
    expect(createLink).toBeInTheDocument();
  });
});
