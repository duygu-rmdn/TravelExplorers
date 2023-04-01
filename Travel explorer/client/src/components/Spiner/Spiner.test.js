import { render, screen } from '@testing-library/react';
import { Spiner } from './Spiner';

test('renders search form', () => {
    render(<Spiner />);
    expect(screen.queryByText('Loading...')).toBeInTheDocument();
});
