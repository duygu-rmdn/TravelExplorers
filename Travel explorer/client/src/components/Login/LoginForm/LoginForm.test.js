import { render } from '@testing-library/react';
import { LoginForm } from './LoginForm';
import { AuthContext } from '../../../contexts/AuthContext';
import { BrowserRouter } from 'react-router-dom';
    const onLoginSubmit = () => {};
    const isAuthenticated = false;
test('renders email and password inputs with correct placeholders', () => {
  const { getByPlaceholderText } =  render(<BrowserRouter>
        <AuthContext.Provider value={{onLoginSubmit, isAuthenticated}}>
        <LoginForm />
        </AuthContext.Provider>
        </BrowserRouter>);
  expect(getByPlaceholderText('Email')).toBeInTheDocument();
  expect(getByPlaceholderText('Password')).toBeInTheDocument();
});
