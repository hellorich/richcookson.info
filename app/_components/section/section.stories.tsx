import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import { Group } from '@/app/_components/group'
import { Skill } from '@/app/_components/skill'
import { Section } from '@/app/_components/section'

const meta: Meta<typeof Section> = {
  component: Section,
  title: 'Components/Section',
  tags: ['autodocs'],
  decorators: [
    (Story) => (
      <div style={{ display: 'grid', padding: '4rem' }}>
        <Story />
      </div>
    ),
  ],
}

export default meta

type Story = StoryObj<typeof meta>

export const Default: Story = {
  args: {
    title: 'Recent work',
  },
}

export const WithDescription: Story = {
  args: {
    title: 'Recent work',
    description: (
      <>
        <p>Here&apos;s what I&apos;ve been doing over the past few years. I&apos;ve highlighted interesting skills I picked up for certain projects but assume the usual core skills such as HTML, CSS, JavaScript and Git are used throughout.</p>
        <p>For my earlier career history, you can check my <a href="https://www.linkedin.com/in/richard-cookson-219377b8">LinkedIn profile</a>.</p>
      </>
    ),
  },
}

export const WithContent: Story = {
  args: {
    title: 'Skills',
    children: (
      <Group>
        <Skill 
          text="HTML" 
          url="https://developer.mozilla.org/en-US/docs/Web/HTML"
        />
        <Skill 
          text="CSS" 
          url="https://developer.mozilla.org/en-US/docs/Web/CSS"
        />
        <Skill 
          text="JavaScript" 
          url="https://developer.mozilla.org/en-US/docs/Web/JavaScript"
        />
        <Skill 
          text="React" 
          url="https://reactjs.org"
        />
        <Skill 
          text="Next.js" 
          url="https://nextjs.org/"
        />
        <Skill 
          text="Storybook" 
          url="https://storybookjs.org"
        />
        <Skill 
          text="Styled Components" 
          url="https://styled-components.com"
        />
        <Skill 
          text="Webpack" 
          url="https://webpack.js.org"
        />
        <Skill 
          text="Node" 
          url="https://nodejs.org"
        />
        <Skill 
          text="Express" 
          url="https://expressjs.com"
        />
        <Skill 
          text="Wordpress" 
          url="https://wordpress.org"
        />
        <Skill 
          text="Bootstrap" 
          url="http://getbootstrap.com"
        />
        <Skill 
          text="SCSS" 
          url="http://sass-lang.com"
        />
        <Skill 
          text="jQuery" 
          url="https://jquery.com"
        />
        <Skill 
          text="Git" 
          url="https://git-scm.com"
        />
        <Skill 
          text="SVG" 
          url="https://www.w3.org/Graphics/SVG"
        />
        <Skill 
          text="Docker" 
          url="https://www.docker.com"
        />
        <Skill 
          text="CI" 
          url="https://en.wikipedia.org/wiki/Continuous_integration"
        />
        <Skill 
          text="UNIX" 
          url="http://www.opengroup.org/unix"
        />
        <Skill 
          text="Web Accessibility" 
          url="https://www.w3.org/WAI/fundamentals/accessibility-intro"
        />
        <Skill 
          text="Atomic Design" 
          url="http://atomicdesign.bradfrost.com"
        />
        <Skill 
          text="Responsive Design" 
          url="https://en.wikipedia.org/wiki/Responsive_web_design"
        />
        <Skill 
          text="Figma" 
          url="https://www.figma.com"
        />
      </Group>
    )
  }
}

Default.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const section = await canvas.getByTestId('section')

	await expect(section).toBeInTheDocument()
}

WithDescription.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const section = await canvas.getByTestId('section')

	await expect(section).toBeInTheDocument()
}

WithContent.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const section = await canvas.getByTestId('section')

	await expect(section).toBeInTheDocument()
}