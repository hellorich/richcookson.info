import type { Meta, StoryObj } from '@storybook/react'

import { Block } from '@/web/app/_components/block'
import { Text } from '@/web/app/_components/text'

const meta: Meta<typeof Block> = {
  component: Block,
  title: 'Components/Block',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Block>

export const Empty: Story = {}

export const WithContent : Story = {
  args: {
    children: <Text>Hello world</Text>,
  },
}