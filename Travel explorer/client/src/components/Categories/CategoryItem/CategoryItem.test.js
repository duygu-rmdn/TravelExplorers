import { render, screen } from '@testing-library/react'
import { BrowserRouter } from 'react-router-dom';
import { CategoryItem } from './CategoryItem'

describe('Category item', () => {
    test('Show name', () => {
        const name = 'Some Category Name';

        render(
            <BrowserRouter>
                <CategoryItem name={name} />
            </BrowserRouter>
        );

        expect(screen.queryByText(name)).toBeInTheDocument();
    });
});