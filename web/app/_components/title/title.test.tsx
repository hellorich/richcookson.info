import { render, screen } from '@testing-library/react'
import Title from './title'

describe('Title component', () => {
  // it renders the title text correctly
  it('renders the title text correctly', () => {
    render(<Title order={1} text="Test Title" />)
    const titleElement = screen.getByText(/Test Title/i)
    expect(titleElement).toBeInTheDocument()
  })

  // it renders as an h1 when order prop is 1
  it('renders as an h1 when order prop is 1', () => {
    render(<Title order={1} text="Test Title" />)
    const titleElement = screen.getByText(/Test Title/i)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.nodeName).toBe('H1')
  })

  // it renders as an h2 when order prop is 2
  it('renders as an h2 when order prop is 2', () => {
    render(<Title order={2} text="Test Title" />)
    const titleElement = screen.getByText(/Test Title/i)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.nodeName).toBe('H2')
  })

  // it renders as an h1 when the order prop is not in the range 1 to 3
  it('renders as an h1 when the order prop is not in the range 1 to 3', () => {
    render(<Title order={4} text="Test Title" />)
    const titleElement = screen.getByText(/Test Title/i)
    expect(titleElement).toBeInTheDocument()
    expect(titleElement.nodeName).toBe('H1')
  })

})