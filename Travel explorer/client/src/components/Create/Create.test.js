import { render, screen } from '@testing-library/react';
import { Create } from './Create';
import { BrowserRouter } from 'react-router-dom';
import { AuthContext } from '../../contexts/AuthContext';
import { TipContext } from '../../contexts/TipContext';

describe('Create component', () => {

    it('should render a title', () => {
        const onTipAddSubmit = () => {
        }
        render(
        <BrowserRouter>
            <AuthContext.Provider value={{ userId: 'we7438crvrw' }}>
                <TipContext.Provider value={{ onTipAddSubmit }}>
                    <Create />
                </TipContext.Provider>
            </AuthContext.Provider>
        </BrowserRouter>
        );
        expect(screen.queryByText('Create')).toBeInTheDocument();
    });

});
