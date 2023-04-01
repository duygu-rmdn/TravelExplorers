import React from 'react';
import { render, fireEvent, screen } from '@testing-library/react';
import { EditForm } from './EditForm';
import { AuthContext } from '../../../contexts/AuthContext';
import { TipContext } from '../../../contexts/TipContext';

describe('EditForm', () => {
    const onTipUpdateSubmit = () => { };
    const token = 'testxcvvxcsgdsgvsdgdst.com';


    it('should update form values when a user types in a field', () => {
        render(<AuthContext.Provider value={{ token }}><TipContext.Provider value={{ onTipUpdateSubmit }}><EditForm tipId={1} /></TipContext.Provider></AuthContext.Provider>);

        const titleInput = screen.getByLabelText('Title');
        fireEvent.change(titleInput, { target: { value: 'New Title' } });

        expect(titleInput.value).toBe('New Title');
    });

    it('should update form values when a user selects a category', () => {
        render(<AuthContext.Provider value={{ token }}><TipContext.Provider value={{ onTipUpdateSubmit }}><EditForm tipId={1} /></TipContext.Provider></AuthContext.Provider>);

        const categorySelect = screen.getByLabelText('Select Category');
        fireEvent.change(categorySelect, { target: { value: 'Adventure Travel' } });

        expect(categorySelect.value).toBe('Adventure Travel');
    });

    it('should update form values when a user selects a country', () => {
        render(<AuthContext.Provider value={{ token }}><TipContext.Provider value={{ onTipUpdateSubmit }}><EditForm tipId={1} /></TipContext.Provider></AuthContext.Provider>);

        const countrySelect = screen.getByLabelText('Country');
        fireEvent.change(countrySelect, { target: { value: 'United States' } });

        expect(countrySelect.value).toBe('United States');
    });
});
