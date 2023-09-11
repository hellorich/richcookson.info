import type { Meta, StoryObj } from '@storybook/react'

import Skill from './skill'

const meta = {
  component: Skill,
  title: 'Skill',
} satisfies Meta<typeof Skill>

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    label: 'HTML',
  },
}
