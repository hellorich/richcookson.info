import { render, screen } from '@testing-library/react'
import { FaCoffee } from 'react-icons/fa'
import Button from './button'

describe('Button', () => {
  beforeEach(() => {
    render(<Button icon={<FaCoffee />} text="Test Button" url="https://www.google.com" />)
  })

  it('renders the button with text', () => {
    const buttonElement = screen.getByText(/Test Button/i)
    expect(buttonElement).toBeInTheDocument()
  })

  it('renders the button with correct href', () => {
    const buttonElement = screen.getByRole('link')
    expect(buttonElement).toHaveAttribute('href', 'https://www.google.com')
  })
})
