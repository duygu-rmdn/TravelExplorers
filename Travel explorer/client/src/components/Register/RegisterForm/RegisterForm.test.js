import { render, fireEvent } from '@testing-library/react';
import { AuthContext } from '../../../contexts/AuthContext';
import { RegisterForm } from './RegisterForm';
import { BrowserRouter } from 'react-router-dom';

describe('RegisterForm component', () => {
  const onRegisterSubmit = jest.fn();
  const isAuthenticated = false;

  const renderWithContext = () => {
    return render(
      <BrowserRouter>
      <AuthContext.Provider value={{ onRegisterSubmit, isAuthenticated }}>
        <RegisterForm />
      </AuthContext.Provider>
      </BrowserRouter>
    );
  };

  it('should render the form with all fields', () => {
    const { getByPlaceholderText } = renderWithContext();

    expect(getByPlaceholderText('Email')).toBeInTheDocument();
    expect(getByPlaceholderText('Username')).toBeInTheDocument();
    expect(getByPlaceholderText('Password')).toBeInTheDocument();
    expect(getByPlaceholderText('Confirm Password')).toBeInTheDocument();
  });

  it('should call onRegisterSubmit with the form values when the form is submitted', () => {
    const { getByPlaceholderText, getByText } = renderWithContext();

    const emailInput = getByPlaceholderText('Email');
    const usernameInput = getByPlaceholderText('Username');
    const passwordInput = getByPlaceholderText('Password');
    const confirmPasswordInput = getByPlaceholderText('Confirm Password');
    const submitButton = getByText('Register');

    fireEvent.change(emailInput, { target: { value: 'test@test.com' } });
    fireEvent.change(usernameInput, { target: { value: 'testuser' } });
    fireEvent.change(passwordInput, { target: { value: 'password123' } });
    fireEvent.change(confirmPasswordInput, { target: { value: 'password123' } });

    fireEvent.click(submitButton);

    expect(onRegisterSubmit).toHaveBeenCalledWith({
      email: 'test@test.com',
      username: 'testuser',
      password: 'password123',
      confirmPassword: 'password123',
    });
  });

  it('should show a NotFound component if isAuthenticated is true', () => {
    const { queryByRole } = render(
      <BrowserRouter>
      <AuthContext.Provider value={{ onRegisterSubmit, isAuthenticated: true }}>
        <RegisterForm />
      </AuthContext.Provider>
      </BrowserRouter>
    );

    expect(queryByRole('heading', { name: /Page not found 404/i })).toBeInTheDocument();
  });
});
