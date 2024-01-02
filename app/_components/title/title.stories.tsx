import type { Meta, StoryObj } from '@storybook/react'

import Title from './title'

const meta: Meta<typeof Title> = {
  component: Title,
  title: 'Components/Title',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Title>;

export const Empty: Story = {}

export const h1: Story = {
  args: {
    order: 1,
    text: 'This is an h1 title',
  },
}

export const h2: Story = {
  args: {
    order: 2,
    text: 'This is an h2 title',
  },
}

export const h3: Story = {
  args: {
    order: 3,
    text: 'This is an h3 title',
  },
}
