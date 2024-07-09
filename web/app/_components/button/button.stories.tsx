import type { Meta, StoryObj } from '@storybook/react'

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


// Email button
export const EmailButton: Story = {
  args: {
		icon: <FaEnvelope aria-label="Email"/>,
    text: 'rich.cookson@frobitz.com',
		url: 'mailto:rich.cookson@frobitz.com',
  },
}

// Github button
export const GithubButton: Story = {
  args: {
		icon: <FaGithub aria-label="Github logo"/>,
    text: 'Github',
		url: 'https://github.com/hellorich',
  },
}

// Mastodon button
export const MastodonButton: Story = {
  args: {
		icon: <FaMastodon aria-label="Mastodon logo"/>,
    text: 'Mastodon',
		url: 'https://mastodon.social/@hellorich',
  },
}

// Phone button
export const PhoneButton: Story = {
  args: {
		icon: <FaMobileButton aria-label="Phone"/>,
    text: '+44 7792 871 698',
		url: 'tel:+447792871698',
  },
}