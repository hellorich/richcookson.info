import { render, screen } from '@testing-library/react'
import Block from './block'

describe('Header', () => {
  it('renders the div element', () => {
    render(<Block>Test text</Block>)
    const divElement = screen.getByTestId('div')
    expect(divElement).toBeInTheDocument()
  })
})