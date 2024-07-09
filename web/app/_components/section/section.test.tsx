import { render, screen } from '@testing-library/react'
import Section from './section'

describe('Section component', () => {
  it('renders the section element', () => {
    render(<Section title="Test Title" />)
    const sectionElement = screen.getByTestId('section')
    expect(sectionElement).toBeInTheDocument()
  })

  it('renders the title correctly', () => {
    render(<Section title="Test Title" />)
    const titleElement = screen.getByText(/Test Title/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the description correctly', () => {
    render(<Section title="Test Title" description={<p>Test description</p>} />)
    const descriptionElement = screen.getByText(/Test description/i)
    expect(descriptionElement).toBeInTheDocument()
  })

  it('renders children correctly', () => {
    render(
      <ul>
        <li>Child 1</li>
        <li>Child 2</li>
      </ul>
    )

    const children = screen.getAllByRole('listitem')
    expect(children.length).toBe(2)
    expect(children[0]).toHaveTextContent('Child 1')
    expect(children[1]).toHaveTextContent('Child 2')
  })
})