import type { Meta, StoryObj } from '@storybook/nextjs-vite'
import HomePage from './page'

const meta: Meta<typeof HomePage> = {
  component: HomePage,
  title: 'Pages/Home',
}

export default meta

type Story = StoryObj<typeof HomePage>

export const Home: Story = {}