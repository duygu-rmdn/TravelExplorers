import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { Carousel } from './Carousel'

describe('Carosel', () => {
    test('Show text', () => {
        const text = 'Discover A Smarter Way To Travel';

        render(
            <BrowserRouter>
                <Carousel />
            </BrowserRouter>
        );

        expect(screen.queryByText(text)).toBeInTheDocument();
    });
});