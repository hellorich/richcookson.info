import { render, screen } from '@testing-library/react'
import { URL } from 'url'
import CareerArticle from './career-article'

describe('CareerArticle', () => {
  const startDate = new Date(2022, 1, 1)
  const endDate = new Date(2022, 2, 1)

  beforeEach(() => {
    render(
      <CareerArticle
        title="Test title"
        url={new URL("https://www.google.com/")}
        linkText="www.google.com"
        dateStart={startDate}
        dateEnd={endDate}
        content={<p>Content</p>}
        skills={<div><p>Test Skill 1</p><p>Test Skill 2</p></div>}
      />
    )
  })

  it('renders the article with title', () => {
    const titleElement = screen.getByText(/Test title/i)
    expect(titleElement).toBeInTheDocument()
  })

  it('renders the article with correct href', () => {
    const linkElement = screen.getByRole('link')
    expect(linkElement).toHaveAttribute('href', 'https://www.google.com/')
  })

  it('renders the link text correctly', () => {
    const linkTextElement = screen.getByText(/www.google.com/i)
    expect(linkTextElement).toBeInTheDocument()
  })

  it('renders the start date correctly', () => {
    const dateElement = screen.getByText(/Feb 2022/i)
    expect(dateElement).toBeInTheDocument()
  })

  it('renders the end date correctly', () => {
    const dateElement = screen.getByText(/Mar 2022/i)
    expect(dateElement).toBeInTheDocument()
  })

  it('renders the content correctly', () => {
    const contentElement = screen.getByText(/Content/i)
    expect(contentElement).toBeInTheDocument()
  })

  it('renders the skills correctly', () => {
    const skillsElement = screen.getByText(/Test Skill 1/i)
    expect(skillsElement).toBeInTheDocument()
  })
})