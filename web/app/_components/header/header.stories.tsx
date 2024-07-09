import type { Meta, StoryObj } from '@storybook/react'

import { Header } from '@/web/app/_components/header'

const meta: Meta<typeof Header> = {
  component: Header,
  title: 'Components/Header',
  tags: ['autodocs'],
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
