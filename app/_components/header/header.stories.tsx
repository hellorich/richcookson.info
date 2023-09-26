import type { Meta, StoryObj } from '@storybook/react'

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