import React from 'react';
import { render, fireEvent } from '@testing-library/react';
import { CreateReview } from './CreateReview';

describe('CreateReview', () => {
  it('renders the component correctly', () => {
    const { getByLabelText, getByText } = render(<CreateReview onReviewSubmit={() => {}} />);
    
    expect(getByLabelText('Add Review')).toBeInTheDocument();
    expect(getByText('Submit')).toBeInTheDocument();
  });

  it('updates the review field when the user types', () => {
    const { getByLabelText } = render(<CreateReview onReviewSubmit={() => {}} />);
    const reviewInput = getByLabelText('Add Review');
    
    fireEvent.change(reviewInput, { target: { value: 'test review' } });

    expect(reviewInput).toHaveValue('test review');
  });

  it('calls onReviewSubmit when the form is submitted', () => {
    const onReviewSubmitMock = jest.fn();
    const { getByText, getByLabelText } = render(<CreateReview onReviewSubmit={onReviewSubmitMock} />);
    const reviewInput = getByLabelText('Add Review');
    const submitButton = getByText('Submit');
    
    fireEvent.change(reviewInput, { target: { value: 'test review' } });
    fireEvent.click(submitButton);

    expect(onReviewSubmitMock).toHaveBeenCalledWith({ review: 'test review' });
  });

//   it('shows validation error when review is empty', () => {
//     const { getByText } = render(<CreateReview onReviewSubmit={() => {}} />);
//     const submitButton = getByText('Submit');

//     fireEvent.click(submitButton);

//     expect(getByText('All fields are required!')).toBeInTheDocument();
//   });
});
