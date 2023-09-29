import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Header from './header'

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Header',
  decorators: [
    (Story) => (
      <div style={{ display: 'grid', padding: '4rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Rich Cookson',
  },
}

Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const header = await canvas.getByRole('banner')
	const h1 = header.querySelector('h1')
	
	await expect(header).toBeInTheDocument()
	await expect(h1.textContent).toBe('Rich Cookson')
}