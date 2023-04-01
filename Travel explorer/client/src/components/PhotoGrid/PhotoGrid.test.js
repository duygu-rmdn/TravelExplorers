import { render, screen } from '@testing-library/react';
import { PhotoGrid } from './PhotoGrid';

describe('PhotoGrid', () => {
  it('renders four images', () => {
    render(<PhotoGrid />);

    const images = screen.getAllByRole('img');
    expect(images.length).toBe(4);
  });
});