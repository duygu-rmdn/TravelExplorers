import React from 'react';
import { render, screen, fireEvent } from '@testing-library/react';
import { DeleteModal } from './DeleteModal';
import { TipContext } from '../../../contexts/TipContext';

describe('DeleteModal', () => {
  const tipId = 'tip-123';
  const onTipDeleteClose = jest.fn();
  const onTipDeleteSumit = jest.fn();
  const showDeleteModal = true;

  const tipContextValues = {
    onTipDeleteClose,
    onTipDeleteSumit,
    showDeleteModal,
  };

  const renderComponent = () => {
    return render(
      <TipContext.Provider value={tipContextValues}>
        <DeleteModal tipId={tipId} />
      </TipContext.Provider>
    );
  };

  it('should render the DeleteModal component', () => {
    renderComponent();
    expect(screen.getByText('Delete tip')).toBeInTheDocument();
    expect(screen.getByText('Are you sure you want to delete this tip?')).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'Yes, delete!' })).toBeInTheDocument();
    expect(screen.getByRole('button', { name: 'No.' })).toBeInTheDocument();
  });

  it('should call onTipDeleteSumit when the "Yes, delete!" button is clicked', () => {
    renderComponent();
    const yesButton = screen.getByRole('button', { name: 'Yes, delete!' });
    fireEvent.click(yesButton);
    expect(onTipDeleteSumit).toHaveBeenCalledWith(expect.any(Object), tipId);
  });

  it('should call onTipDeleteClose when the "No." button is clicked', () => {
    renderComponent();
    const noButton = screen.getByRole('button', { name: 'No.' });
    fireEvent.click(noButton);
    expect(onTipDeleteClose).toHaveBeenCalledTimes(1);
  });
});
