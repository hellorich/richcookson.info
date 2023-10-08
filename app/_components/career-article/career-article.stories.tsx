import type { Meta, StoryObj } from "@storybook/react"
import { within } from "@storybook/testing-library"
import { expect } from "@storybook/jest"

import CareerArticle from "./career-article"

const meta: Meta<typeof CareerArticle> = {
  component: CareerArticle,
  title: 'Career Article',
}

export default meta

type Story = StoryObj<typeof CareerArticle>

export const Default: Story = {
  args: {
    children: '',
    dateEnd: '01-2023',
    dateStart: '10-2022',
    title: 'Building a single page web app in React for Hugo and Cat',
		url: 'http://www.hugoandcat.com',
  },
}

Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const article = await canvas.getByRole('article')
	
	await expect(article).toBeInTheDocument()
}