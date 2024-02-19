import { render, screen } from '@testing-library/react'
import Text from './text'

describe('Text component', () => {
  it('renders inline text when inline prop is preset', () => {
    render(<Text inline>Test text</Text>)
    const textElement = screen.getByText(/Test text/i)
    expect(textElement).toBeInTheDocument()
    expect(textElement.firstChild?.nodeName).toBe('SPAN')
  })

  it('renders paragraph text when inline prop is false', () => {
    render(<Text inline={false}>Test Text</Text>)
    const textElement = screen.getByText(/Test Text/i)
    expect(textElement).toBeInTheDocument()
    expect(textElement.firstChild?.nodeName).toBe('P')
  })
})