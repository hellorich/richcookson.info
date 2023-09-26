import { expect } from '@storybook/jest'
import type { Meta, StoryObj } from '@storybook/react'
import { within, userEvent } from '@storybook/testing-library'

import Skill from './skill'

const meta: Meta<typeof Skill> = {
  component: Skill,
  title: 'Skill',
  decorators: [
    (Story) => (
      <ul style={{ listStyle: 'none' }}>
        <Story />
      </ul>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Skill>;

export const Default: Story = {
  args: {
    label: 'Tag',
		url: 'http://www.google.com',
  },
}

export const ClickedLink: Story = {
	args: {
    label: 'Tag',
		url: 'http://www.google.com',
  },

	play: async ({ canvasElement }) => {
		const canvas = within(canvasElement)
		const link = canvas.getByRole('link', { name: 'Tag' })
		
		await userEvent.click(link)

		await expect(window.location.href).toBe(link.href)
	}
}