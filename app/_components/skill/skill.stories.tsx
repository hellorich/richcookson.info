import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Skill from './skill'

const meta: Meta<typeof Skill> = {
  component: Skill,
  title: 'Skill',
  decorators: [
    (Story) => (
      <ul style={{ listStyle: 'none' }}>
        <li><Story /></li>
      </ul>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Skill>

export const Default: Story = {
  args: {
    text: 'Tag',
		url: new URL('http://www.google.com'),
  },
}

Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const link = await canvas.getByRole('link')

	await expect(link).toBeInTheDocument()
	await expect(link.textContent).toBe('Tag')
}