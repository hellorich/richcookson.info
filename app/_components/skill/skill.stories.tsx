import type { Meta, StoryObj } from '@storybook/react'

import Skill from './skill'

const meta: Meta<typeof Skill> = {
  component: Skill,
  title: 'Skill',
  decorators: [
    (Story) => (
      <ul style={{ listStyle: 'none' }}>
        <Story />
      </ul>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Skill>;

export const Default: Story = {
  args: {
    label: 'Tag',
		url: 'http://www.google.com',
  },
}