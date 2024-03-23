import type { Meta, StoryObj } from '@storybook/react'

import { Group } from '@/app/_components/group'
import { Skill } from '@/app/_components/skill'
import { Button } from '@/app/_components/button'

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
				url="https://developer.mozilla.org/en-US/docs/Web/HTML"
			/>
    </Group>
  ),
}

// Multiple tags
export const WithMultipleTags: Story = {
	render: (args) => (
    <Group {...args}>
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
  ),
}

// Single button
export const WithOneButton: Story = {
	render: (args) => (
    <Group {...args}>
      <Button 
				icon={<FaEnvelope aria-label="Email"/>} 
				text="rich.cookson@frobitz.com" 
				url="mailto:rich.cookson@frobitz.com"
			/>
    </Group>
  ),
}

// Multiple buttons
export const WithMultipleButtons: Story = {
	render: (args) => (
    <Group {...args}>
      <Button 
				icon={<FaEnvelope aria-label="Email"/>} 
				text="rich.cookson@frobitz.com" 
				url="mailto:rich.cookson@frobitz.com"
			/>
			<Button 
				icon={<FaMobileButton aria-label="Phone"/>} 
				text="+44 7792 871 698" 
				url="tel:+447792871698"
			/>
			<Button 
				icon={<FaGithub aria-label="Github logo"/>} 
				text="Github" 
				url="https://github.com/hellorich"
			/>
			<Button 
				icon={<FaMastodon aria-label="Mastodon logo"/>} 
				text="Mastodon" 
				url="https://github.com/hellorich"
			/>
    </Group>
  ),
}
