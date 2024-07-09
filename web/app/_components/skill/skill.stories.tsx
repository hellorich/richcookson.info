import type { Meta, StoryObj } from '@storybook/react'

import { Skill } from '@/web/app/_components/skill'

const meta: Meta<typeof Skill> = {
  component: Skill,
  title: 'Components/Skill',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <ul style={{ listStyle: 'none' }}>
        <li><Story /></li>
      </ul>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof Skill>

export const Default: Story = {
  args: {
    text: 'Tag',
		url: 'http://www.google.com',
  },
}
