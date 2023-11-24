import { render, screen } from '@testing-library/react'
import Group from './group'

describe('Group', () => {
  it('renders children correctly', () => {
    render(
      <Group>
        <div>Child 1</div>
        <div>Child 2</div>
      </Group>
    )

    const children = screen.getAllByRole('listitem')
    expect(children.length).toBe(2)
    expect(children[0]).toHaveTextContent('Child 1')
    expect(children[1]).toHaveTextContent('Child 2')
  })

  it('renders nothing when no children are provided', () => {
    const { container } = render(<Group />)
    expect(container.firstChild).toBeNull()
  })
})