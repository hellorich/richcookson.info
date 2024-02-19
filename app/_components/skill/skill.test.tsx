import { render, screen } from '@testing-library/react'
import Skill from './skill'

describe('Skill', () => {
  it('renders the skill text correctly', () => {
    render(<Skill text="Test Skill" url="https://www.test.com" />)
    const skillElement = screen.getByText(/Test Skill/i)
    expect(skillElement).toBeInTheDocument()
  })

  it('renders the skill link correctly', () => {
    render(<Skill text="Test Skill" url="https://www.test.com" />)
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', 'https://www.test.com/')
  })
})