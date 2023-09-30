import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Group from './group'
import Skill from '../skill/skill'

const meta: Meta<typeof Group> = {
  component: Group,
  title: 'Group',
}

export default meta

type Story = StoryObj<typeof Group>

export const Empty: Story = {}

export const WithOneItem: Story = {
	render: (args) => (
    <Group {...args}>
      <Skill 
				text='HTML' 
				url='https://developer.mozilla.org/en-US/docs/Web/HTML'
			/>
    </Group>
  ),
}

WithOneItem.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const group = await canvas.getByTestId('group')
	
	await expect(group).toBeInTheDocument()
}

export const WithMultipleItems: Story = {
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

WithMultipleItems.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const group = await canvas.getByTestId('group')
	
	await expect(group).toBeInTheDocument()
}
