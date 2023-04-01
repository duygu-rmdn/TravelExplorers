import { render, screen } from '@testing-library/react';
import { Login } from './Login';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { TipContext } from '../../contexts/TipContext';

const isAuthenticated = false;
describe('Login', () => {
    it('renders the login form and photo grid', () => {
        render(
            <BrowserRouter>
                <AuthContext.Provider value={{ isAuthenticated }}>
                    <TipContext.Provider >
                        <Login />
                    </TipContext.Provider>
                </AuthContext.Provider>
            </BrowserRouter>
        );
        expect(screen.queryByText('Email')).toBeInTheDocument();
        expect(screen.queryByText('Password')).toBeInTheDocument();
    });
});
