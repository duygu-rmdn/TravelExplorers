import { render, fireEvent, screen } from '@testing-library/react';
import { CreateForm } from './CreateForm';
import { AuthContext } from '../../../contexts/AuthContext';
import { TipContext } from '../../../contexts/TipContext';

const mockUserId = 'test-user-id';
const mockOnTipAddSubmit = jest.fn();

describe('CreateForm', () => {
  it('should render the form', () => {
    render(
      <AuthContext.Provider value={{ userId: mockUserId }}>
        <TipContext.Provider value={{ onTipAddSubmit: mockOnTipAddSubmit }}>
          <CreateForm />
        </TipContext.Provider>
      </AuthContext.Provider>
    );

    const titleInput = screen.getByLabelText('Title');
    expect(titleInput).toBeInTheDocument();

    const categorySelect = screen.getByLabelText('Select Category');
    expect(categorySelect).toBeInTheDocument();

    const countrySelect = screen.getByLabelText('Country');
    expect(countrySelect).toBeInTheDocument();

    const nightsInput = screen.getByLabelText('Nights');
    expect(nightsInput).toBeInTheDocument();

    const maxPriceInput = screen.getByLabelText('Max Price');
    expect(maxPriceInput).toBeInTheDocument();

    const imageUrlInput = screen.getByLabelText('Image url');
    expect(imageUrlInput).toBeInTheDocument();

    const descriptionTextarea = screen.getByLabelText('Description');
    expect(descriptionTextarea).toBeInTheDocument();

    const conclusionTextarea = screen.getByLabelText('Conclusion');
    expect(conclusionTextarea).toBeInTheDocument();

    const shareButton = screen.getByText('Share');
    expect(shareButton).toBeInTheDocument();
  });

  it('should submit the form', async () => {
    render(
      <AuthContext.Provider value={{ userId: mockUserId }}>
        <TipContext.Provider value={{ onTipAddSubmit: mockOnTipAddSubmit }}>
          <CreateForm />
        </TipContext.Provider>
      </AuthContext.Provider>
    );

    const titleInput = screen.getByLabelText('Title');
    fireEvent.change(titleInput, { target: { value: 'Test title' } });

    const categorySelect = screen.getByLabelText('Select Category');
    fireEvent.change(categorySelect, { target: { value: 'Adventure Travel' } });

    const countrySelect = screen.getByLabelText('Country');
    fireEvent.change(countrySelect, { target: { value: 'Afghanistan' } });

    const nightsInput = screen.getByLabelText('Nights');
    fireEvent.change(nightsInput, { target: { value: '3' } });

    const maxPriceInput = screen.getByLabelText('Max Price');
    fireEvent.change(maxPriceInput, { target: { value: '100' } });

    const imageUrlInput = screen.getByLabelText('Image url');
    fireEvent.change(imageUrlInput, { target: { value: 'http://test.com/image.jpg' } });

    const descriptionTextarea = screen.getByLabelText('Description');
    fireEvent.change(descriptionTextarea, { target: { value: 'Test description description description description' } });

    const conclusionTextarea = screen.getByLabelText('Conclusion');
    fireEvent.change(conclusionTextarea, { target: { value: 'Test conclusion' } });

    const shareButton = screen.getByText('Share');
    fireEvent.click(shareButton);

    expect(mockOnTipAddSubmit).toHaveBeenCalledWith({
      title: 'Test title',
      category: 'Adventure Travel',
      imageUrl: 'http://test.com/image.jpg',
      description: 'Test description description description description',
      conclusion: 'Test conclusion',
      country: 'Afghanistan',
      maxPrice: '100',
      nights: '3',
      ownerId: mockUserId,
    });
  });
});
