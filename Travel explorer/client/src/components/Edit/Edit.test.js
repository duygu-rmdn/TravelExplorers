import { MemoryRouter, Route, useParams } from 'react-router-dom';
import { render, screen, fireEvent } from '@testing-library/react';
import { Edit } from './Edit';
import { AuthContext } from '../../contexts/AuthContext';
import { TipContext } from '../../contexts/TipContext';

jest.mock('react-router-dom', () => ({
    ...jest.requireActual('react-router-dom'),
    useParams: jest.fn(),
}));
const token = 'testxcvvxcsgdsgvsdgdst.com';

const onTipUpdateSubmit = () => {};

describe('Edit component', () => {
    beforeEach(() => {
        useParams.mockReturnValue({ tipId: '1' });
    });

    afterEach(() => {
        jest.resetAllMocks();
    });

    it('displays correctly edit page', () => {
        render(
            <MemoryRouter>
                <AuthContext.Provider value={{ token }}>
                    <TipContext.Provider value={{onTipUpdateSubmit}}>
                        <Edit />
                    </TipContext.Provider>
                </AuthContext.Provider>
            </MemoryRouter>
        );


        expect(screen.queryByText('Edit')).toBeInTheDocument();
    });

});
