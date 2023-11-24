// button.test.tsx
import { render, screen } from '@testing-library/react'
import { URL } from 'url'
import Button from './button'
import { FaBeer } from 'react-icons/fa'

describe('Button', () => {
  it('renders the button with text', () => {
    render(<Button icon={<FaBeer />} text="Test Button" url={new URL('https://test.com')} />);
    const buttonElement = screen.getByText(/Test Button/i);
    expect(buttonElement).toBeInTheDocument();
  });

  it('renders the button with correct href', () => {
    render(<Button icon={<FaBeer />} text="Test Button" url={new URL('https://test.com')} />);
    const buttonElement = screen.getByRole('link');
    expect(buttonElement).toHaveAttribute('href', 'https://test.com/');
  });
});