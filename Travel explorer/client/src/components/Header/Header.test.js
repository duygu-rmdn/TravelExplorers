import React from 'react';
import { render, screen } from '@testing-library/react';
import { BrowserRouter, MemoryRouter } from 'react-router-dom';
import { Header } from './Header';
import { AuthContext } from '../../contexts/AuthContext';

describe('Header', () => {
    const authContextValue = {
        isAuthenticated: false,
    };
    test('renders navigation links', () => {
        render(
            <BrowserRouter>
                <AuthContext.Provider value={authContextValue}>
                        <Header />
                </AuthContext.Provider>
            </BrowserRouter>
        );

        expect(screen.getByText('Home')).toBeInTheDocument();
        expect(screen.getByText('Tips')).toBeInTheDocument();
        expect(screen.getByText('Categories')).toBeInTheDocument();
        expect(screen.getByText('About')).toBeInTheDocument();
    });
});
