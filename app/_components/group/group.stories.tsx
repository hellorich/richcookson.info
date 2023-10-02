import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Group from './group'
import Skill from '../skill/skill'
import Button from '../button/button'

import { FaEnvelope, FaGithub, FaMastodon, FaMobileButton } from 'react-icons/fa6'

const meta: Meta<typeof Group> = {
  component: Group,
  title: 'Group',
}

export default meta

type Story = StoryObj<typeof Group>

export const Empty: Story = {}

// Single tag

export const WithOneTag: Story = {
	render: (args) => (
    <Group {...args}>
      <Skill 
				text='HTML' 
				url='https://developer.mozilla.org/en-US/docs/Web/HTML'
			/>
    </Group>
  ),
}

WithOneTag.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const group = await canvas.getByTestId('group')
	
	await expect(group).toBeInTheDocument()
}

// Multiple tags

export const WithMultipleTags: Story = {
	render: (args) => (
    <Group {...args}>
      <Skill 
				text='HTML' 
				url='https://developer.mozilla.org/en-US/docs/Web/HTML'
			/>
			<Skill 
				text='CSS' 
				url='https://developer.mozilla.org/en-US/docs/Web/CSS'
			/>
    </Group>
  ),
}

WithMultipleTags.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const group = await canvas.getByTestId('group')
	
	await expect(group).toBeInTheDocument()
}

// Single button

export const WithOneButton: Story = {
	render: (args) => (
    <Group {...args}>
      <Button 
				icon={<FaEnvelope aria-label="Email"/>} 
				text="rich.cookson@frobitz.com" 
				url="mailto:rich.cookson@frobitz.com"
			/>
    </Group>
  ),
}

WithOneButton.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const group = await canvas.getByTestId('group')
	
	await expect(group).toBeInTheDocument()
}

// Multiple buttons

export const WithMultipleButtons: Story = {
	render: (args) => (
    <Group {...args}>
      <Button 
				icon={<FaEnvelope aria-label="Email"/>} 
				text="rich.cookson@frobitz.com" 
				url="mailto:rich.cookson@frobitz.com"
			/>
			<Button 
				icon={<FaMobileButton aria-label="Phone"/>} 
				text="+44 7792 871 698" 
				url="tel:+447792871698"
			/>
			<Button 
				icon={<FaGithub aria-label="Github logo"/>} 
				text="Github" 
				url="https://github.com/hellorich"
			/>
			<Button 
				icon={<FaMastodon aria-label="Mastodon logo"/>} 
				text="Mastodon" 
				url="https://github.com/hellorich"
			/>
    </Group>
  ),
}

WithMultipleButtons.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const group = await canvas.getByTestId('group')
	
	await expect(group).toBeInTheDocument()
}