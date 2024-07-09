import type { Meta, StoryObj } from '@storybook/react'

import { Text } from '@/web/app/_components/text'

const meta: Meta<typeof Text> = {
  component: Text,
  title: 'Components/Text',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Text>

export const Empty: Story = {}

export const Paragraph : Story = {
  args: {
    inline: false,
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export const Span : Story = {
  args: {
    inline: true,
    children: 'The quick brown fox jumps over the lazy dog',
  },
}

export const WithHTML : Story = {
  args: {
    inline: true,
    children: 'The quick brown <strong>fox</strong> jumps over the lazy dog',
  },
}


