/* eslint-disable react/jsx-key */
import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import CareerArticle from './career-article'
import Group from '../group/group'
import Skill from '../skill/skill'

const meta: Meta<typeof CareerArticle> = {
  component: CareerArticle,
  title: 'Career Article',
}

export default meta

type Story = StoryObj<typeof CareerArticle>

export const Default: Story = {
  args: {
    title: 'Building a single page web app in React for Hugo and Cat',
    url: new URL('http://www.hugoandcat.com'),
    linkText: 'www.hugoandcat.com',
    dateEnd: new Date('2023, 01, 01'),
    dateStart: new Date('2022, 10, 01'),
    content: (
      <>
        <p>Front end developer on a project to create a dashboard app, displaying a number of charts and statistics monitoring roll-out and communication of devices for a telecommunications company.</p>
        <ul>
          <li>Developed the React app in StoryBook for rapid development while the back-end was being worked on.</li>
          <li>Used React Query to consume the multiple API&apos;s required by the app.</li>
          <li>Created a number of charts based on customised Victory Charts components, and also bespoke charts as SVG components.</li>
          <li>Carried out demonstrations of progress to internal team at Hugo & Cat as well as to stakeholders at the client company thorough sprints.</li>
        </ul>
      </>
    ),
    skills: [
      <Skill 
        text="React" 
        url={new URL('https://reactjs.org')}
      />,
      <Skill 
        text="Storybook" 
        url={new URL('https://storybookjs.org')}
      />,
      <Skill 
        text="Styled Components" 
        url={new URL('https://styled-components.com')}
      />,
    ]
  },
}

Default.play = async ({ canvasElement }) => {
  const canvas = within(canvasElement)
  const article = await canvas.getByRole('article')
  
  await expect(article).toBeInTheDocument()
	await expect(article).toBeInTheDocument()
}