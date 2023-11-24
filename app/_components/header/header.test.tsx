import { render, screen } from '@testing-library/react'
import Header from './header'

describe('Header', () => {
  it('renders the title correctly', () => {
    render(<Header title="Test Title" />)
    const titleElement = screen.getByText(/Test Title/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the header element', () => {
    render(<Header title="Test Title" />)
    const headerElement = screen.getByRole('banner')
    expect(headerElement).toBeInTheDocument()
  })
})