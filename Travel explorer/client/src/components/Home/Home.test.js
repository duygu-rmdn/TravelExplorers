import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { Home } from './Home';
import { TipContext } from '../../contexts/TipContext';

describe('Home', () => {
    const authContextValue = {
        isAuthenticated: false,
    };
    const tips = [{ id: 1, title: 'Tip 1' }, { id: 2, title: 'Tip 2' }];
    test('renders home page', () => {
        render(
            <BrowserRouter>
                <AuthContext.Provider value={authContextValue}>
                    <TipContext.Provider value={{tips}}>
                        <Home />
                    </TipContext.Provider>
                </AuthContext.Provider>
            </BrowserRouter>
        );

        expect(screen.getByText('Discover A Smarter Way To Travel')).toBeInTheDocument();
        expect(screen.getByText('Next')).toBeInTheDocument();
    });
});
