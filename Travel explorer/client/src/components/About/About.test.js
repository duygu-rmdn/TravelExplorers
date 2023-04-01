import React from 'react';
import { render, screen } from '@testing-library/react';
import { About } from './About';
import { BrowserRouter } from 'react-router-dom';
import { TipContext } from '../../contexts/TipContext';

describe('About component', () => {
    it('renders the component without errors', () => {
        const mockTips = [{ id: 1, title: 'Tip 1' }, { id: 2, title: 'Tip 2' }];
        render(<BrowserRouter>
            <TipContext.Provider value={{ tips: mockTips }}>
                 <About />
                 </TipContext.Provider>
            </BrowserRouter>);
        expect(screen.queryByText('About Us')).toBeInTheDocument();
    });
});
