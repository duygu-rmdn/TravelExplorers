import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter, Route, Routes } from 'react-router-dom';
import { TipContext } from '../../contexts/TipContext';
import { TipList } from './TipList';

describe('TipList', () => {
    it('should render "No articles yet" message if there are no tips', () => {
        const tips = [];

        render(
            <BrowserRouter>
                    <TipContext.Provider value={{ tips }}>
                        <TipList />
                    </TipContext.Provider>
            </BrowserRouter >
        );

        expect(screen.queryByText('No articles yet')).toBeInTheDocument();
    });
});
