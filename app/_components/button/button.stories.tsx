import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { FaEnvelope, FaGithub, FaMastodon, FaMobileButton } from 'react-icons/fa6'
import Button from './button'

const meta: Meta<typeof Button> = {
  component: Button,
  title: 'Components/Button',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Button>

// Button with no icon

export const DefaultButton: Story = {
  args: {
    text: 'Button',
		url: 'http://www.google.com',
  },
}

// Button Hover state
export const OnHover: Story = {
  args: {
    text: 'Button',
		url: 'http://www.google.com',
  },
}
OnHover.parameters = { pseudo: { hover: true } }

DefaultButton.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const link = await canvas.getByRole('link')

  await expect(link).toBeInTheDocument()
  await expect(link.textContent).toBe('Button')

  // Interaction test
  link.addEventListener('click', function(event) {
    event.preventDefault()
  })
  link.click()
  await expect(link).toHaveAttribute('href', 'http://www.google.com')
}

// Email button

export const EmailButton: Story = {
  args: {
		icon: <FaEnvelope aria-label="Email"/>,
    text: 'rich.cookson@frobitz.com',
		url: 'mailto:rich.cookson@frobitz.com',
  },
}

EmailButton.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const link = await canvas.getByRole('link')
	const icon = await canvas.getByLabelText('Email')

	await expect(link).toBeInTheDocument()
	await expect(link.textContent).toBe('rich.cookson@frobitz.com')

	await expect(icon).toBeInTheDocument()
}

// Github button

export const GithubButton: Story = {
  args: {
		icon: <FaGithub aria-label="Github logo"/>,
    text: 'Github',
		url: 'https://github.com/hellorich',
  },
}

GithubButton.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const link = await canvas.getByRole('link')
	const icon = await canvas.getByLabelText('Github logo')

	await expect(link).toBeInTheDocument()
	await expect(link.textContent).toBe('Github')

	await expect(icon).toBeInTheDocument()
}

// Mastodon button

export const MastodonButton: Story = {
  args: {
		icon: <FaMastodon aria-label="Mastodon logo"/>,
    text: 'Mastodon',
		url: 'https://github.com/hellorich',
  },
}

MastodonButton.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const link = await canvas.getByRole('link')
	const icon = await canvas.getByLabelText('Mastodon logo')

	await expect(link).toBeInTheDocument()
	await expect(link.textContent).toBe('Mastodon')

	await expect(icon).toBeInTheDocument()
}

// Phone button

export const PhoneButton: Story = {
  args: {
		icon: <FaMobileButton aria-label="Phone"/>,
    text: '+44 7792 871 698',
		url: 'tel:+447792871698',
  },
}

PhoneButton.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const link = await canvas.getByRole('link')
	const icon = await canvas.getByLabelText('Phone')

	await expect(link).toBeInTheDocument()
	await expect(link.textContent).toBe('+44 7792 871 698')

	await expect(icon).toBeInTheDocument()
}