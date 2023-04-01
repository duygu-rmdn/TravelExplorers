import { render, screen } from '@testing-library/react';
import { Register } from './Register';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';

const onRegisterSubmit = () => { }
const isAuthenticated = false;
describe('Register', () => {
    test('renders the RegisterForm component', () => {
        render(<BrowserRouter><AuthContext.Provider value={{onRegisterSubmit, isAuthenticated}}><Register /></AuthContext.Provider></BrowserRouter>);
        expect(screen.queryByText('Confirm Password')).toBeInTheDocument();
    });

   
});
