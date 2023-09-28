import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { FaGithub } from 'react-icons/fa';
import Button from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Button',
}

export default meta

type Story = StoryObj<typeof Button>

export const NoIcon: Story = {
  args: {
    text: 'Button',
		url: 'http://www.google.com',
  },
}

NoIcon.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const link = await canvas.getByRole('link')

	await expect(link).toBeInTheDocument()
	await expect(link.textContent).toBe('Button')
}

export const GithubIcon: Story = {
  args: {
		icon: <FaGithub />,
    text: 'Github',
		url: 'https://github.com/hellorich',
  },
}