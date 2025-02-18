import { render, screen, waitFor } from '@testing-library/react';
import userEvent from '@testing-library/user-event';
import { describe, expect, test } from 'vitest';
import App from '../App';

describe('App', () => {
  test('renders loading state initially', () => {
    render(<App />);
    expect(screen.getByText('Loading users...')).toBeInTheDocument();
  });

  test('renders user list after loading', async () => {
    render(<App />);
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });
    expect(screen.getByText('jane.smith@example.com')).toBeInTheDocument();
  });

  test('displays user details when user is selected', async () => {
    const user = userEvent.setup();
    render(<App />);
    
    await waitFor(() => {
      expect(screen.getByText('John Doe')).toBeInTheDocument();
    });

    await user.click(screen.getByTestId('user-item-1'));
    
    expect(screen.getByText('User Details')).toBeInTheDocument();
    expect(screen.getByText('John')).toBeInTheDocument();
    expect(screen.getByText('Doe')).toBeInTheDocument();
    expect(screen.getByText('john.doe@example.com')).toBeInTheDocument();
    expect(screen.getByText('male')).toBeInTheDocument();
  });
});