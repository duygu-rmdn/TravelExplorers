import { createContext, useState } from 'react';
import { useNavigate } from 'react-router-dom';

import { authServiceFactory } from '../services/authService';

export const AuthContext = createContext();

export const AuthProvider = ({
    children
}) => {
    const navigate = useNavigate();
    const [auth, setAuth] = useState({});

    const authService = authServiceFactory(auth.accessToken);

    const onLoginSubmit = async (data) => {
        try {
            const result = await authService.login(data);

            setAuth(result);

            navigate('/tips');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onRegisterSubmit = async (values) => {
        const { confirmPassword, ...registerData } = values;
        if (confirmPassword !== registerData.password) {
            return;
        }

        try {
            const result = await authService.register(registerData);

            setAuth(result);

            navigate('/tips');
        } catch (error) {
            console.log('There is a problem');
        }
    };

    const onLogout = async () => {
        if (!!auth.accessToken) {
            await authService.logout();

            setAuth({});
        }
    };

    const contextValue = {
        onLogout,
        onLoginSubmit,
        onRegisterSubmit,
        userId: auth._id,
        token: auth.accessToken,
        username: auth.username,
        isAuthenticated: !!auth.accessToken,
    };

    return (
        <>
            <AuthContext.Provider value={contextValue}>
                {children}
            </AuthContext.Provider>
        </>
    )
}