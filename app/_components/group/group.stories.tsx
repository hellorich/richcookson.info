import type { Meta, StoryObj } from '@storybook/react'
import { within } from '@storybook/testing-library'
import { expect } from '@storybook/jest'

import Group from './group'
import Skill from '../skill/skill'
import Button from '../button/button'

import { FaEnvelope, FaGithub, FaMastodon, FaMobileButton } from 'react-icons/fa6'

const meta: Meta<typeof Group> = {
  component: Group,
  title: 'Components/Group',
	tags: ['autodocs'],
}

export default meta

type Story = StoryObj<typeof Group>

// Change this to use the template for the component and pass args as an array of react components

export const Empty: Story = {}

// Single tag

export const WithOneTag: Story = {
	render: (args) => (
    <Group {...args}>
      <Skill 
				text="HTML" 
				url={new URL("https://developer.mozilla.org/en-US/docs/Web/HTML")}
			/>
    </Group>
  ),
}

WithOneTag.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const group = await canvas.getByTestId('group')
	
	await expect(group).toBeInTheDocument()
}

// Multiple tags

export const WithMultipleTags: Story = {
	render: (args) => (
    <Group {...args}>
      <Skill 
				text="HTML" 
				url={new URL("https://developer.mozilla.org/en-US/docs/Web/HTML")}
			/>
			<Skill 
				text="CSS" 
				url={new URL("https://developer.mozilla.org/en-US/docs/Web/CSS")}
			/>
			<Skill 
				text="JavaScript" 
				url={new URL("https://developer.mozilla.org/en-US/docs/Web/JavaScript")}
			/>
			<Skill 
				text="React" 
				url={new URL("https://reactjs.org")}
			/>
			<Skill 
				text="Next.js" 
				url={new URL("https://nextjs.org/")}
			/>
			<Skill 
				text="Storybook" 
				url={new URL("https://storybookjs.org")}
			/>
			<Skill 
				text="Styled Components" 
				url={new URL("https://styled-components.com")}
			/>
			<Skill 
				text="Webpack" 
				url={new URL("https://webpack.js.org")}
			/>
			<Skill 
				text="Node" 
				url={new URL("https://nodejs.org")}
			/>
			<Skill 
				text="Express" 
				url={new URL("https://expressjs.com")}
			/>
			<Skill 
				text="Wordpress" 
				url={new URL("https://wordpress.org")}
			/>
			<Skill 
				text="Bootstrap" 
				url={new URL("http://getbootstrap.com")}
			/>
			<Skill 
				text="SCSS" 
				url={new URL("http://sass-lang.com")}
			/>
			<Skill 
				text="jQuery" 
				url={new URL("https://jquery.com")}
			/>
			<Skill 
				text="Git" 
				url={new URL("https://git-scm.com")}
			/>
			<Skill 
				text="SVG" 
				url={new URL("https://www.w3.org/Graphics/SVG")}
			/>
			<Skill 
				text="Docker" 
				url={new URL("https://www.docker.com")}
			/>
			<Skill 
				text="CI" 
				url={new URL("https://en.wikipedia.org/wiki/Continuous_integration")}
			/>
			<Skill 
				text="UNIX" 
				url={new URL("http://www.opengroup.org/unix")}
			/>
			<Skill 
				text="Web Accessibility" 
				url={new URL("https://www.w3.org/WAI/fundamentals/accessibility-intro")}
			/>
			<Skill 
				text="Atomic Design" 
				url={new URL("http://atomicdesign.bradfrost.com")}
			/>
			<Skill 
				text="Responsive Design" 
				url={new URL("https://en.wikipedia.org/wiki/Responsive_web_design")}
			/>
			<Skill 
				text="Figma" 
				url={new URL("https://www.figma.com")}
			/>
    </Group>
  ),
}

WithMultipleTags.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const group = await canvas.getByTestId('group')
	
	await expect(group).toBeInTheDocument()
}

// Single button

export const WithOneButton: Story = {
	render: (args) => (
    <Group {...args}>
      <Button 
				icon={<FaEnvelope aria-label="Email"/>} 
				text="rich.cookson@frobitz.com" 
				url={new URL("mailto:rich.cookson@frobitz.com")}
			/>
    </Group>
  ),
}

WithOneButton.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const group = await canvas.getByTestId('group')
	
	await expect(group).toBeInTheDocument()
}

// Multiple buttons

export const WithMultipleButtons: Story = {
	render: (args) => (
    <Group {...args}>
      <Button 
				icon={<FaEnvelope aria-label="Email"/>} 
				text="rich.cookson@frobitz.com" 
				url={new URL("mailto:rich.cookson@frobitz.com")}
			/>
			<Button 
				icon={<FaMobileButton aria-label="Phone"/>} 
				text="+44 7792 871 698" 
				url={new URL("tel:+447792871698")}
			/>
			<Button 
				icon={<FaGithub aria-label="Github logo"/>} 
				text="Github" 
				url={new URL("https://github.com/hellorich")}
			/>
			<Button 
				icon={<FaMastodon aria-label="Mastodon logo"/>} 
				text="Mastodon" 
				url={new URL("https://github.com/hellorich")}
			/>
    </Group>
  ),
}

WithMultipleButtons.play = async ({ canvasElement }) => {
	const canvas = within(canvasElement)
	const group = await canvas.getByTestId('group')
	
	await expect(group).toBeInTheDocument()
}