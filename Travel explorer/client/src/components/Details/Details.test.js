import { render, screen } from '@testing-library/react';
import { BrowserRouter } from 'react-router-dom';
import { TipContext } from '../../contexts/TipContext';
import { AuthContext } from '../../contexts/AuthContext';
import { useService } from '../../hooks/useService';
import { Details } from './Details';

jest.mock('../../hooks/useService');
jest.mock('../../services/reviewService');

describe('Details', () => {
  const tipId = '123';
  const tip = {
    _id: tipId,
    title: 'Test tip',
    category: 'Test category',
    country: 'Test country',
    maxPrice: 100,
    nights: 5,
    description: 'Test description',
    conclusion: 'Test conclusion',
    ownerId: '456',
    imageUrl: 'http://test-image.com'
  };
  const reviews = [
    {
      _id: '789',
      author: {
        username: 'testuser',
        email: 'testuser@test.com'
      },
      review: 'Test review'
    }
  ];
  const onDeleteClick = jest.fn();
  const isAuthenticated = true;
  const userId = '456';
  const username = 'testuser';
  const email = 'testuser@test.com';
  const useAuthContextMock = jest.fn().mockReturnValue({
    isAuthenticated,
    userId,
    username,
    email
  });

  beforeEach(() => {
    useService.mockReturnValue({
      getOne: jest.fn().mockResolvedValue(tip),
      reviewService: jest.fn().mockResolvedValue(reviews)
    });
  });

  it('should render tip details', async () => {
    render(
      <BrowserRouter>
        <TipContext.Provider value={{ onDeleteClick }}>
          <AuthContext.Provider value={{ useAuthContextMock }}>
            <Details />
          </AuthContext.Provider>
        </TipContext.Provider>
      </BrowserRouter>
    );

    await screen.findByText('Test tip');
    expect(screen.getByText('Test tip')).toBeInTheDocument();
    expect(screen.getByText('Test category')).toBeInTheDocument();
    expect(screen.getByText('Test country')).toBeInTheDocument();
    expect(screen.getByText('100')).toBeInTheDocument();
    expect(screen.getByText('Test description')).toBeInTheDocument();
    expect(screen.getByText('Test conclusion')).toBeInTheDocument();
  });

});