/* eslint-disable react/jsx-key */
import type { Meta, StoryObj } from '@storybook/react'

import CareerArticle from './career-article'
import { Skill } from '@/app/_components/skill'

const meta: Meta<typeof CareerArticle> = {
  component: CareerArticle,
  title: 'Components/Career Article',
  tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof CareerArticle>

export const Default: Story = {
  args: {
    title: 'Building a single page web app in React for Hugo and Cat',
    url: "http://www.hugoandcat.com",
    linkText: 'www.hugoandcat.com',
    dateEnd: new Date('2023, 01, 01'),
    dateStart: new Date('2022, 10, 01'),
    content: "<p>A short contract to help cover the maintenance of existing client sites and aid with the implementation of the companies rebranding.</p><ul><li>Worked on updates to multiple Wordpress sites using plugins such as <a href=\"https://www.upstatement.com/timber\" rel=\"external\">Timber</a>, <a href=\"https://www.advancedcustomfields.com\" rel=\"external\">Advanced Custom Fields</a> and alternative code structures such as <a href=\"https://roots.io/bedrock\" rel=\"external\">Bedrock</a></li><li>Partnered with a designer to implement the company rebrand on the intranet, and their blog Pegasus Pulse - improved the layout and responsive code</li></ul>",
    skills: [
      <Skill 
        text="React" 
        url="https://reactjs.org"
      />,
      <Skill 
        text="Storybook" 
        url="https://storybookjs.org"
      />,
      <Skill 
        text="Styled Components" 
        url="https://styled-components.com"
      />,
    ]
  },
}
